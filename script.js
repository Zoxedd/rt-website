// script.js
// AOS init, smooth scrolling, and faster radioactive blob background animation with adjustable speed factor (4x)

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS animations
    AOS.init({ duration: 1000, once: true, offset: 50 });

    // 2. Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // 3. Kick off radioactive blobs in the background
    initBackgroundBlobs();
});

function initBackgroundBlobs() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    const blobs = [];
    const blobCount = 25;
    const speedFactor = 4.0; // doubled again for 4x speed

    // Blob constructor
    function Blob() {
        this.reset();
    }
    Blob.prototype.reset = function() {
        // Radius range (40px to 140px)
        this.radius = Math.random() * 100 + 40;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Adjusted velocity with speedFactor
        this.vx = (Math.random() - 0.5) * 0.3 * speedFactor;
        this.vy = (Math.random() - 0.5) * 0.3 * speedFactor;
        // Brighter opacity stops
        this.color = Math.random() > 0.5
            ? 'rgba(138,255,0,0.25)'
            : 'rgba(59, 176, 0, 0.29)';
    };
    Blob.prototype.draw = function() {
        const grad = ctx.createRadialGradient(
            this.x, this.y, this.radius * 0.1,
            this.x, this.y, this.radius
        );
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');

        ctx.save();
        ctx.shadowBlur = this.radius * 0.8;
        ctx.shadowColor = this.color;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
    };
    Blob.prototype.update = function() {
        this.x += this.vx;
        this.y += this.vy;
        if (
            this.x < -this.radius || this.x > width + this.radius ||
            this.y < -this.radius || this.y > height + this.radius
        ) {
            this.reset();
        }
    };

    // Resize canvas to fill window
    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Create blobs
    for (let i = 0; i < blobCount; i++) blobs.push(new Blob());

    // Animation loop
    (function animate() {
        ctx.clearRect(0, 0, width, height);
        blobs.forEach(b => { b.update(); b.draw(); });
        requestAnimationFrame(animate);
    })();
}