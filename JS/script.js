const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let data = {
    x: 0,
    y: 0,
    width: 30,
    height: 35,
    color: "red"
}

function draw() {
    ctx.fillStyle = data.color
    ctx.fillRect(data.x, data.y, data.width, data.height);
}

function loop() {
    requestAnimationFrame(lopp);
    draw();
}

loop();

document.addEventListener("keydown", function(e) {
    
});