// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Ball {
    constructor(x,y,xvel,yvel,color,size) {
        this.x = x;
        this.y = y;
        this.xvel = xvel;
        this.yvel = yvel;
        this.color = color;
        this.size = size;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }

    update() {
        if (this.x + this.size >= width) {
            this.xvel = -this.xvel;
        }

        if (this.x + this.size <= 0) {
            this.xvel = -this.xvel;
        }

        if (this.y + this.size >= height) {
            this.yvel = -this.yvel;
        }

        if (this.y + this.size <= 0) {
            this.yvel = -this.yvel;
        }

        this.x += this.xvel;
        this.y += this.yvel;
    }

    collisionDetect() {
        for (const ball of balls) {
            if (this != ball) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance <= this.size + ball.size) {
                    ball.color = randomRGB();
                    this.color = randomRGB();
                    this.yvel = -this.yvel;
                    this.xvel = -this.xvel;
                }
            }
        }
    }
}

const balls = [];

while (balls.length < 20) {
    const size = random(10,20);
    const ball = new Ball(random(0+size, width-size), random(0+size, height-size), random(-15,15), random(-15,15), randomRGB(), size);
    balls.push(ball);
}



function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);
}
const ball = new Ball (100,100,10,10,randomRGB(),20)

loop();