var startX = 100; // posição x inicial
var startY = 100; // posição y inicial
var endX = 400; // posição x final
var endY = 100; // posição y final
var controlX = 250; // posição x do ponto de controle
var controlY = 0; // posição y do ponto de controle


function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
  
      ctx.beginPath();
      ctx.moveTo(0 , 0 );
      ctx.bezierCurveTo(400, 0, 0 , 1100, 600, 400 );
      ctx.bezierCurveTo(1000, -200, 1280 , 0, 1300, 400 );

        ctx.lineTo(1280, 720);
        ctx.fill();
  
  }    }

var duration = 2; // duração da animação em segundos
var element = document.getElementById('canvas'); // elemento a ser animado
var timeline = gsap.timeline(); // cria uma linha do tempo para a animação
timeline.to(element, { duration: duration, motionPath: { path: bezierCurve } });
