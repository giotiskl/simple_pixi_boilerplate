// get canvas and context
const canvas = document.getElementById('app'),
      ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightgray';
ctx.fillRect(0,0,640,480);

// draw text outline
ctx.fillStyle = 'black';
ctx.font = '36px sans-serif';
ctx.textAlign = 'center';
ctx.lineWidth = 4;
ctx.strokeText('This is a sample canvas', 640 / 2, 480 / 2);

// fill text
ctx.fillStyle = 'red';
ctx.fillText('This is a sample canvas', 640 / 2, 480 / 2);

// Log successful msg for pixi
if (PIXI) console.info("PIXI.JS is successfully installed")
