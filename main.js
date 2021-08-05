

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 1;


    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.arc(250,210,40,0,2*Math.PI);
        ctx.stroke();
        
  ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.arc(350,210,40,0,2*Math.PI);
        ctx.stroke();

ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.arc(450,210,40,0,2*Math.PI);

        ctx.stroke();
ctx.beginPath();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 5;
    ctx.arc(300,250,40,0,2*Math.PI);
        ctx.stroke();

  ctx.stroke();
ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.arc(400,250,40,0,2*Math.PI);
        ctx.stroke();


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}