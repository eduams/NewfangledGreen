var a = 1;
var b = 100;
var c = 1;
var d =1;

function draw() {
    var canvas = document.getElementById('canvas');
    
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      ctx.moveTo(0, 500);
      ctx.lineTo(0, 721);
      ctx.lineTo(150, 721);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "#c3f6d1";
      ctx.moveTo(1280, 0);
      ctx.lineTo(1280, 300);
      ctx.lineTo(920, 0);
      ctx.fill();

  }    }

  setInterval(anim,1)


function anim(){


  draw();
  
}