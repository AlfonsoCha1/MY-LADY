const canvas = document.getElementById("fuegosCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Particle {
  constructor(x, y, angle, distance, color) {
    // Posición inicial
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.distance = distance;
    this.color = color;
    this.alpha = 1;

    // Cálculo de destino en forma de corazón
    const t = angle;
    const heartX = 16 * Math.pow(Math.sin(t), 3);
    const heartY = -(
      13 * Math.cos(t) -
      5 * Math.cos(2 * t) -
      2 * Math.cos(3 * t) -
      Math.cos(4 * t)
    );

    this.destX = this.x + heartX * distance;
    this.destY = this.y + heartY * distance;
  }

  update() {
    // Movimiento hacia el destino
    this.x += (this.destX - this.x) * 0.05;
    this.y += (this.destY - this.y) * 0.05;
    this.alpha -= 0.01;
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
}

function createHeartFirework(x, y) {
  const colors = ["#ff007f", "#ff0000", "#ffff66", "#ff66cc"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  for (let i = 0; i < 100; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 8 + 4;
    fireworks.push(new Particle(x, y, angle, distance, color));
  }
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  fireworks = fireworks.filter(p => p.alpha > 0);
  fireworks.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}

setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height * 0.6;
  createHeartFirework(x, y);
}, 1200);

animate();
