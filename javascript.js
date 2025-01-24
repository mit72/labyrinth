/* v1
let x = 0;
let y = 1;
let xtemp = x; 
let ytemp = y;
function narisii(){
    var canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    const resitev = [234,2, 234,10, 202,10, 202,26, 218,26, 218,58, 234,58, 234,74, 218,74, 218,90, 202,90, 202,106, 218,106, 218,122, 234,122, 234,90, 266,90, 266,74, 282,74, 282,106, 266,106, 266,122, 250,122, 250,138, 234,138, 234,154, 282,154, 282,138, 298,138, 298,122, 314,122, 314,138, 362,138, 362,154, 346,154, 346,186, 378,186, 378,218, 362,218, 362,202, 330,202, 330,218, 346,218, 346,234, 330,234, 330,266, 346,266, 346,282, 314,282, 314,218, 298,218, 298,298, 282,298, 282,282, 250,282, 250,314, 202,314, 202,282, 218,282, 218,266, 202,266, 202,234, 170,234, 170,218, 138,218, 138,202, 122,202, 122,186, 74,186, 74,170, 58,170, 58,186, 42,186, 42,202, 26,202, 26,218, 10,218, 10,234, 26,234, 26,250, 10,250, 10,266, 26,266, 26,282, 10,282, 10,330, 26,330, 26,314, 74,314, 74,330, 42,330, 42,362, 26,362, 26,378, 10,378, 10,394, 26,394, 26,410, 42,410, 42,458, 74,458, 74,474, 122,474, 122,458, 138,458, 138,474, 154,474, 154,442, 170,442, 170,474, 218,474, 218,458, 234,458, 234,474, 250,474, 250,482]

    xtemp = x; 
    ytemp = y;
    x += 2;
    y += 2;
        
        function narisi(x, y, ytemp, xtemp){
            //naredi da gre od x do x temp po 1 pixel
            ctx.strokeStyle = "rgb(255,0,0)";
            ctx.beginPath();
            ctx.moveTo(resitev[xtemp],resitev[ytemp]);
            ctx.lineTo(resitev[xtemp]+1,resitev[ytemp]+1);
            ctx.stroke();
            ctx.closePath();

        }
        if(resitev[x-2] != resitev[x]){
            setInterval(narisi, 10);
        } else if(resitev[y-2] != resitev[y]) {
            setInterval(narisi, 10);
        } else {
            setInterval(narisi, 10);
        }
        

}


setInterval(narisii, 100); */

/* v2

document.addEventListener("DOMContentLoaded", function(event) {
    let x = 0;
    let y = 1;
    let xtemp = x; 
    let ytemp = y;

    function narisii() {
        
      var canvas = document.getElementById('canvas');
      const ctx = canvas.getContext("2d");
      const resitev = [234, 2, 234, 10, 202, 10, 202, 26, 218, 26, 218, 58, 234, 58, 234, 74, 218, 74, 218, 90, 202, 90, 202, 106, 218, 106, 218, 122, 234, 122, 234, 90, 266, 90, 266, 74, 282, 74, 282, 106, 266, 106, 266, 122, 250, 122, 250, 138, 234, 138, 234, 154, 282, 154, 282, 138, 298, 138, 298, 122, 314, 122, 314, 138, 362, 138, 362, 154, 346, 154, 346, 186, 378, 186, 378, 218, 362, 218, 362, 202, 330, 202, 330, 218, 346, 218, 346, 234, 330, 234, 330, 266, 346, 266, 346, 282, 314, 282, 314, 218, 298, 218, 298, 298, 282, 298, 282, 282, 250, 282, 250, 314, 202, 314, 202, 282, 218, 282, 218, 266, 202, 266, 202, 234, 170, 234, 170, 218, 138, 218, 138, 202, 122, 202, 122, 186, 74, 186, 74, 170, 58, 170, 58, 186, 42, 186, 42, 202, 26, 202, 26, 218, 10, 218, 10, 234, 26, 234, 26, 250, 10, 250, 10, 266, 26, 266, 26, 282, 10, 282, 10, 330, 26, 330, 26, 314, 74, 314, 74, 330, 42, 330, 42, 362, 26, 362, 26, 378, 10, 378, 10, 394, 26, 394, 26, 410, 42, 410, 42, 458, 74, 458, 74, 474, 122, 474, 122, 458, 138, 458, 138, 474, 154, 474, 154, 442, 170, 442, 170, 474, 218, 474, 218, 458, 234, 458, 234, 474, 250, 474, 250, 482];
      ctx.globalAlpha = 1;
      ctx.clearRect(0,0, canvas.clientWidth, canvas.clientHeight);
      ctx.strokeStyle = "rgb(255,0,0)";


      if (resitev[x - 2] != resitev[x]) {
        
        ctx.beginPath();
        ctx.moveTo(resitev[x], resitev[y]);
        ctx.lineTo(resitev[x + 2], resitev[y + 2]);
        ctx.stroke();
        ctx.closePath();
      } else if (resitev[y - 2] != resitev[y]) {
        
        ctx.beginPath();
        ctx.moveTo(resitev[x], resitev[y]);
        ctx.lineTo(resitev[x + 2], resitev[y + 2]);
        ctx.stroke();
        ctx.closePath();
      }
      x += 2;
      y += 2;
    }

    
    document.getElementById('start').addEventListener('click', function() {
      setInterval(narisii, 100);
    });
  });

*/

document.addEventListener("DOMContentLoaded", function(event) {
    let x = 0;
    let y = 1;
    let animating = false;
    let currentProgress = 0;
    const speed = 4;

    function narisi() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        const resitev = [234, 2, 234, 10, 202, 10, 202, 26, 218, 26, 218, 58, 234, 58, 234, 74, 218, 74, 218, 90, 202, 90, 202, 106, 218, 106, 218, 122, 234, 122, 234, 90, 266, 90, 266, 74, 282, 74, 282, 106, 266, 106, 266, 122, 250, 122, 250, 138, 234, 138, 234, 154, 282, 154, 282, 138, 298, 138, 298, 122, 314, 122, 314, 138, 362, 138, 362, 154, 346, 154, 346, 186, 378, 186, 378, 218, 362, 218, 362, 202, 330, 202, 330, 218, 346, 218, 346, 234, 330, 234, 330, 266, 346, 266, 346, 282, 314, 282, 314, 218, 298, 218, 298, 298, 282, 298, 282, 282, 250, 282, 250, 314, 202, 314, 202, 282, 218, 282, 218, 266, 202, 266, 202, 234, 170, 234, 170, 218, 138, 218, 138, 202, 122, 202, 122, 186, 74, 186, 74, 170, 58, 170, 58, 186, 42, 186, 42, 202, 26, 202, 26, 218, 10, 218, 10, 234, 26, 234, 26, 250, 10, 250, 10, 266, 26, 266, 26, 282, 10, 282, 10, 330, 26, 330, 26, 314, 74, 314, 74, 330, 42, 330, 42, 362, 26, 362, 26, 378, 10, 378, 10, 394, 26, 394, 26, 410, 42, 410, 42, 458, 74, 458, 74, 474, 122, 474, 122, 458, 138, 458, 138, 474, 154, 474, 154, 442, 170, 442, 170, 474, 218, 474, 218, 458, 234, 458, 234, 474, 250, 474, 250, 482];
        ctx.globalAlpha = 1;
        ctx.strokeStyle = "rgb(255,0,0)";
        ctx.lineWidth = 5;

        if (x < resitev.length - 2) {
            
            const startX = resitev[x];
            const startY = resitev[y];
            const endX = resitev[x + 2];
            const endY = resitev[y + 2];

            
            const dolzinaCrte = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2);

            
            currentProgress += speed / dolzinaCrte;

            
            if (currentProgress > 1) currentProgress = 1;

            
            const interpolatedX = startX + (endX - startX) * currentProgress;
            const interpolatedY = startY + (endY - startY) * currentProgress;

            
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(interpolatedX, interpolatedY);
            ctx.stroke();
            ctx.closePath();

            
            ctx.fillStyle = "rgb(255,0,0)";
            ctx.fillRect(startX - ctx.lineWidth / 2, startY - ctx.lineWidth / 2, ctx.lineWidth, ctx.lineWidth);

            if (currentProgress >= 1) {
                x += 2;
                y += 2;
                currentProgress = 0;
            }

            requestAnimationFrame(narisi); 
        } else {
           
            const lastX = resitev[x];
            const lastY = resitev[y];
            ctx.fillStyle = "rgb(255,0,0)";
            ctx.fillRect(lastX - ctx.lineWidth / 2, lastY - ctx.lineWidth / 2, ctx.lineWidth, ctx.lineWidth);

            animating = false; 
        }
    }

    document.getElementById('start').addEventListener('click', function() {
        
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        x = 0;
        y = 1;
        currentProgress = 0;

        
        if (!animating) {
            animating = true;
            narisi();
        }
    });
});



