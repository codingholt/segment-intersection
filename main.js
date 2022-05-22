const canvas = document.getElementById('myCanvas')
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const A={x:200, y:150};
const B={x:150, y:250};
const C={x:50, y:100};
const D={x:250, y:200};

const ctx = canvas.getContext('2d')

ctx.moveTo(A.x, A.y);
ctx.lineTo(B.x, B.y);
ctx.moveTo(C.x, C.y);
ctx.lineTo(D.x, D.y);
ctx.stroke();


drawDot(A, "A")
drawDot(B, "B")
drawDot(C, "C")
drawDot(D, "D")


const t =  0.5
const lerp  = (A,B,t) => {
    return A+(B-A)*t;
}
const M={
    x:lerp(A.x, B.x, t),
    y:lerp(A.y, B.y, t)
}
console.log

drawDot(M,'M')


function drawDot(point, label){
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(point.x, point.y, 10, 0, Math.PI*2)
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 14px Arial';

    ctx.fillText(label, point.x, point.y)
}