import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

export default defineConfig({
  plugins: [{
    name: 'local-html-sections',
    transformIndexHtml(html) {
      return html.replace(/<!-- @include ([a-z-]+\.html) -->/g, (_, filename) =>
        fs.readFileSync(path.resolve('src/templates', filename), 'utf8'));
    }
  }]
});
