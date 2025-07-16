


export function Particles(){
    const canvasElement = document.querySelector('#canvas');

    const particles = []
    
    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = Math.random() * 5 + 2;
            this.alpha = 1;
            this.dx = (Math.random() - 0.5) * 2;
            this.dy = (Math.random() - 0.5) * 2;
        }
        update() {
            this.x += this.dx;
            this.y += this.dy;
            this.alpha -= 0.02;
        }
        draw(ctx) {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
        isAlive() {
            return this.alpha > 0;
        }
    }
    const renderParticles = () => {
    const canvasCtx = canvasElement.getContext('2d');

    particles.forEach(p => {
        p.update();
        p.draw(canvasCtx);
    });
    for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[ i ].isAlive()) {
            particles.splice(i, 1);
        }
    }
};
renderParticles();
return (
        <canvas id="canvas" class='canvas_style'></canvas>
    
    )

}
