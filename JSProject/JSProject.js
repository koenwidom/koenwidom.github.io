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
    constructor(x,y,color,size,number) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.number = number;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();

        //number drawing

        if (this.number<=9) {
            ctx.fillStyle = 'black';
            ctx.font = `${this.size}px "Comic Sans MS"`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(this.number, this.x, this.y);
            
        }
        else {
            ctx.fillStyle = 'black';
            ctx.font = `${this.size}px "Comic Sans MS"`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText("clear", this.x, this.y);
            
        }
        
    }

    update() {
        if (random(0,200) > 196) {  
            this.x = width/2 + random(-100,600);
            this.y = height/2 + random(-300,300);
            if (random(0,10) > 8) {
                this.color = randomRGB();
            }
            
        }

        for (const ball of balls) {
            if (this != ball) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance <= this.size + ball.size) {
                    this.x = width/2 + random(-400,600);
                    this.y = height/2 + random(-300,300);
                    break;
                }
            }
        }
    }

}

const balls = [];

let number = 0;
while (balls.length < 11) {
    const size = random(45,60);
    const ball = new Ball(random(0+size, width-size), random(0+size, height-size), randomRGB(), size, number);
    balls.push(ball);
    number++;
}



function loop() {
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0, 0, width, height);

    for (const ball of balls) {
        ball.draw();
        ball.update();
    }

    requestAnimationFrame(loop);
}



loop();

canvas.addEventListener('click', (e) => {

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    for (const ball of balls) {
        const dx = mouseX - ball.x;
        const dy = mouseY - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance <= ball.size) {
            if (ball.number<=9) {
            const box = document.getElementById("numbers");
            
            if (box.value.length <10) {
                box.value += ball.number;
            }
            
            break;
            }
            else {
                document.getElementById("numbers").value = "";
            }
            
        }
    }
});

const submit = document.getElementById('submit');
const numList = document.getElementById('numList');
const box = document.getElementById("numbers");

submit.addEventListener('click', () => {
    const currentValue = box.value;

    if (currentValue.length === 10 ) {
        numList.textContent = `Submitted(& console logged): ${currentValue}`;
        box.value = '';
        console.log('Submitted: '+currentValue);
   } else {
       numList.textContent = 'Submitted: A phone number has 10 digits... try again...';
   }

});