var a = 1;
var b = 1;
var c = 1;
var d = 1;
  function bezier() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var ctx2 = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.beginPath();
      var grd = ctx.createLinearGradient(0, 0, 1280, 0);
      grd.addColorStop(0, "white");
      grd.addColorStop(1, "#c3f6d1");

      ctx.fillStyle = grd;
      ctx.moveTo(0, 720 *b);
      ctx.bezierCurveTo(200 * -b , 100 ,50 * -c , 600 *b , 1280  , 100 *c );
      ctx.lineTo(1280, 720);
      ctx.fill();
      
      ctx2.beginPath();

      var grd2 = ctx.createLinearGradient(0, 0, 1280, 0);
      grd2.addColorStop(0, "white");
      grd2.addColorStop(1, "#1ece8b");



      ctx2.fillStyle = grd2;
      ctx2.moveTo(0, 720 *b);
      ctx2.bezierCurveTo(100 * -b , 100 ,50 * -c , 600 *b , 1280  , 200 *c );
      ctx2.lineTo(1280, 720);
      ctx2.fill();
  
  }    }

  setInterval(anim,10)


function anim(){
  a = a*1.04;
  b = (1/120/a)+b;
  c = (1/90/a)+c;
  console.log(a)
  bezier();
  
}
