var x = 0;
const points = ["", "", ""];
function drawIt(){
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');
    c.clearRect(0,0,canvas.width, canvas.heigth);
    c.fillStyle = "red";
    c.fillRect(x,100,200,100);
    x+=5;
}
setInterval(drawIt, 30);