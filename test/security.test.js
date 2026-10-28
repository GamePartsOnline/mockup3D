import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';

test('public access, admin protection and submission validation', async () => {
  const child = spawn(process.execPath, ['server.js'], {
    env: { ...process.env, PORT: '0', HOST: '127.0.0.1',
      ADMIN_USER: 'test-admin', ADMIN_PASSWORD: 'test-only-password',
      SMTP_HOST: 'smtp.invalid', SMTP_USER: 'test', SMTP_PASS: 'test' },
    stdio: ['ignore', 'pipe', 'pipe']
  });
  try {
    const port = await new Promise((resolve, reject) => {
      child.stdout.once('data', data => resolve(Number(data.toString().match(/port (\d+)/)[1])));
      child.once('error', reject);
      child.once('exit', () => reject(new Error('server stopped')));
    });
    const base = 'http://127.0.0.1:' + port;
    const publicPage = await fetch(base);
    assert.equal(publicPage.status, 200);
    assert.equal((await publicPage.text()).includes('data-mode="admin"'), false);
    assert.equal(publicPage.headers.get('x-content-type-options'), 'nosniff');
    assert.match(publicPage.headers.get('content-security-policy'), /object-src 'none'/);
    assert.equal((await fetch(base + '/admin')).status, 401);
    const authorized = await fetch(base + '/admin', {
      headers: { Authorization: 'Basic ' + Buffer.from('test-admin:test-only-password').toString('base64') }
    });
    assert.equal(authorized.status, 200);
    assert.match(await authorized.text(), /data-mode="admin"/);
    const catRes = await fetch(base + '/api/catalog-categories');
    assert.equal(catRes.status, 200);
    const initialCats = await catRes.json();
    assert.equal(Array.isArray(initialCats), true);
    const unauthCat = await fetch(base + '/api/catalog-categories', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '["Test"]'
    });
    assert.equal(unauthCat.status, 401);
    const authCat = await fetch(base + '/api/catalog-categories', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from('test-admin:test-only-password').toString('base64'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([...initialCats, 'NouvelleCat'])
    });
    assert.equal(authCat.status, 200);
    await fetch(base + '/api/catalog-categories', {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from('test-admin:test-only-password').toString('base64'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(initialCats)
    });
    assert.equal((await fetch(base + '/missing.js')).status, 404);
    assert.equal((await fetch(base + '/%00')).status, 400);
    const crossSite = await fetch(base + '/api/submissions', {
      method: 'POST', headers: { Origin: 'https://unrelated.invalid', 'Content-Type': 'application/json' }, body: '{}'
    });
    assert.equal(crossSite.status, 403);
    const invalidFiles = await fetch(base + '/api/submissions', {
      method: 'POST', headers: { Origin: base, 'Content-Type': 'application/json' },
      body: JSON.stringify({ product: 'Test', files: [
        { name: 'wrap-test.png', type: 'image/png', data: 'data:image/png;base64,YmFk' },
        { name: 'mockup-test.png', type: 'image/png', data: 'data:image/png;base64,YmFk' }
      ] })
    });
    assert.equal(invalidFiles.status, 400);
    const repeated = await fetch(base + '/api/submissions', {
      method: 'POST', headers: { Origin: base, 'Content-Type': 'application/json' }, body: '{}'
    });
    assert.equal(repeated.status, 429);
  } finally {
    child.kill();
  }
});
