const canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
const numberOfParticles = 5000; 

class Particle{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 15 +1;
        this.weight = 2;
        this.directionX = -2;
    }
    update(){
        if(this.y > canvas.height){
            this.y = 0 - this.size;
            this.weight = Math.random() * 1 + 1;
            this.x += Math.random() * canvas.width * 1.3;
        }
        this.weight += 0.01;
        this.y += this.weight;
        this.x += this.directionX;
    }
    draw(){
        ctx.fillStyle = "purple";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}
function init(){
    for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x, y));      
    }
    console.log(particlesArray)
}
init();

function animate(){
    ctx.fillStyle = "rgba(255, 255, 255, 0.01)"
    ctx.fillRect(0,0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        
    }
    requestAnimationFrame(animate);
}
animate();