const canvas = document.getElementById('ambient-canvas');
const ctx = canvas.getContext('2d');

const particleState = {
  particles: [],
  hearts: [],
  width: 0,
  height: 0,
  reduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches
};

function resizeCanvas() {
  particleState.width = window.innerWidth;
  particleState.height = window.innerHeight;
  canvas.width = particleState.width * window.devicePixelRatio;
  canvas.height = particleState.height * window.devicePixelRatio;
  canvas.style.width = `${particleState.width}px`;
  canvas.style.height = `${particleState.height}px`;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
}

function createParticles() {
  const particleCount = particleState.reduceMotion ? 28 : Math.min(80, Math.max(36, Math.floor(window.innerWidth / 18)));
  particleState.particles = Array.from({ length: particleCount }, () => ({
    x: Math.random() * particleState.width,
    y: Math.random() * particleState.height,
    r: Math.random() * 2.7 + 0.8,
    dx: (Math.random() - 0.5) * 0.8,
    dy: (Math.random() - 0.5) * 0.7,
    alpha: Math.random() * 0.7 + 0.2,
    color: ['#ffb6d9', '#ff1744', '#ffd700', '#ff4fa3'][Math.floor(Math.random() * 4)]
  }));
}

function drawParticles() {
  ctx.clearRect(0, 0, particleState.width, particleState.height);

  particleState.particles.forEach((particle) => {
    particle.x += particle.dx;
    particle.y += particle.dy;

    if (particle.x < 0 || particle.x > particleState.width) particle.dx *= -1;
    if (particle.y < 0 || particle.y > particleState.height) particle.dy *= -1;

    ctx.beginPath();
    ctx.fillStyle = particle.color + Math.round(particle.alpha * 255).toString(16).padStart(2, '0');
    ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animateScene() {
  if (particleState.reduceMotion) {
    return;
  }

  drawParticles();
  requestAnimationFrame(animateScene);
}

function setupBackground() {
  resizeCanvas();
  createParticles();
  if (!particleState.reduceMotion) {
    animateScene();
  }
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createParticles();
});

window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (event) => {
  particleState.reduceMotion = event.matches;
  if (particleState.reduceMotion) {
    ctx.clearRect(0, 0, particleState.width, particleState.height);
  } else {
    createParticles();
    animateScene();
  }
});

setupBackground();
