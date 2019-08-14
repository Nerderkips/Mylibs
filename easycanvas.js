function createBalls(num){

    let canvas = document.getElementById("canvas");

    let ctx = canvas.getContext("2d");

    

    class Ball{

        constructor(x, y){

            this.x = x;

            this.y = y;

            this.xs = Math.random()*4-2;

            this.ys = Math.random()*4-2;

            this.w = 10;

            this.h = 10;

            this.f = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;

        }

        show(){

            ctx.fillStyle = this.f;

            ctx.beginPath();

            ctx.ellipse(this.x, this.y, this.w, this.h, 1, Math.PI*2, false);

            ctx.fill();

            //ctx.fill();

            ctx.closePath();

        }

        update(){

            this.x += this.xs;

            this.y += this.ys;

            if(this.x + this.w/2 >= canvas.width || this.x-this.w/2 <= 0){

                this.xs *= -1;

            }

            if(this.y + this.h/2 >= canvas.height || this.y-this.h/2 <= 0){

                this.ys *= -1;

           }

       }

   } 

    

    let balls = [];

    for(let i = 0;i<num;i++){

        balls.push(new Ball((Math.random()*(canvas.width-100))+50, (Math.random()*(canvas.height-100))+50 ))

    }

    function loop(){

        

        

        ctx.fillStyle="rgba(150, 150, 150, 0.1)";

        ctx.fillRect(0, 0, canvas.width, canvas.height);

    

        for(let i = 0;i<balls.length;i++){

            balls[i].show();

            balls[i].update();

          

        }

        

        window.requestAnimationFrame(loop);

    }

    

    loop();

} 
