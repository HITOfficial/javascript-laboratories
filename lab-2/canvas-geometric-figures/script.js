
function drawOnCanvas() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');


    // triangle
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(200, 200);
    ctx.lineTo(100, 200);
    ctx.closePath();
    ctx.fillStyle = '#FFAAFF';
    ctx.fill();

    // rectangle
    ctx.beginPath();
    ctx.moveTo(300, 200);
    ctx.lineTo(350, 200);
    ctx.lineTo(350, 400);
    ctx.lineTo(300, 400);
    ctx.closePath();
    ctx.fillStyle = '#AABBCC';
    ctx.fill();

    // circle

    ctx.beginPath();
    ctx.arc(150, 350, 50, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = '#A90993';
    ctx.fill();
}

window.onload = drawOnCanvas;

