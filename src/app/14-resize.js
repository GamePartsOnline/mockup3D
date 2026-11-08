// Shared application state is supplied by the entry point.
export function register(app) {
app.resize = function resize() {
  const { clientWidth: w, clientHeight: h } = app.viewer;
  if (!w || !h) return;
  app.renderer.setSize(w, h, true);
  app.camera.aspect = w / h;
  app.camera.updateProjectionMatrix();
};

app.animate = function animate(now = performance.now()) {
  requestAnimationFrame(app.animate);
  const dt = Math.min(.05, (now - app.previousFrameTime) / 1000);
  app.previousFrameTime = now;
  if (document.querySelector('#autoRotate').checked && app.controls.enabled) {
    const mode = document.querySelector('#rotationMode').value, reverse = document.querySelector('#reverse').checked ? -1 : 1, speed = Number(document.querySelector('#speed').value) / 12 * .55;
    let direction = reverse;
    if (mode === 'swing') {
      app.swingAngle += speed * dt * app.swingDirection;
      if (Math.abs(app.swingAngle) > .75) {
        app.swingAngle = Math.sign(app.swingAngle) * .75;
        app.swingDirection *= -1;
      }
      direction *= app.swingDirection;
    }
    const offset = app.camera.position.clone().sub(app.controls.target).applyAxisAngle(app.rotationAxes[mode], speed * dt * direction);
    app.camera.position.copy(app.controls.target).add(offset);
    app.camera.lookAt(app.controls.target);
  }
  if (app.currentProductKey === 'showcase') {
    if (app.controls) {
      app.controls.minAzimuthAngle = -Math.PI * 0.36;
      app.controls.maxAzimuthAngle = Math.PI * 0.36;
      app.controls.minPolarAngle = Math.PI * 0.12;
      app.controls.maxPolarAngle = Math.PI * 0.47;
      app.controls.minDistance = 1.8;
      app.controls.maxDistance = 7.5;
    }
    if (app.camera.position.z < 0.25) app.camera.position.z = 0.25;
    if (app.camera.position.y > 3.40) app.camera.position.y = 3.40;
    if (app.camera.position.y < -0.20) app.camera.position.y = -0.20;
    app.updateSnowParticles?.(dt);
  } else if (app.controls && app.controls.minAzimuthAngle !== -Infinity) {
    app.controls.minAzimuthAngle = -Infinity;
    app.controls.maxAzimuthAngle = Infinity;
    app.controls.minPolarAngle = 0;
    app.controls.maxPolarAngle = Math.PI;
    app.controls.minDistance = 0.2;
    app.controls.maxDistance = 20;
  }
  app.controls.update();
  app.renderer.render(app.scene, app.camera);
  app.updateOverlay();
};
}

export function initialize(app) {
new ResizeObserver(app.resize).observe(app.viewer);
app.resize();
app.homeView();
app.animate();
setTimeout(() => document.querySelector('#productSelect').dispatchEvent(new CustomEvent('change', { detail: { initial: true } })), 100);
app.workspace = document.querySelector('.workspace');
for (const [id, className, side] of [
  ['toggleLeftSidebar', 'left-collapsed', 'gauche'],
  ['toggleRightSidebar', 'right-collapsed', 'droite']
]) {
  const button = document.getElementById(id);
  if (!button) continue;
  const sync = () => {
    const expanded = !app.workspace.classList.contains(className);
    button.setAttribute('aria-expanded', String(expanded));
    button.setAttribute('aria-label', (expanded ? 'Masquer' : 'Afficher') + ' le menu de ' + side);
    button.title = button.getAttribute('aria-label');
  };
  button.addEventListener('click', () => {
    app.workspace.classList.toggle(className);
    sync();
    requestAnimationFrame(app.resize);
    setTimeout(app.resize, 320);
  });
  sync();
}
}
