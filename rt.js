
var start;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function showShape() {
    var left = Math.random() * 300;
    var top = Math.random() * 300;
    var wh = (Math.random() * 100) + 100;
    var shape = document.getElementById("shape");
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = wh + "px";
    shape.style.height = wh + "px";
    shape.style.backgroundColor = getRandomColor();
    shape.style.display = "block";
    start = new Date().getTime();
}

function move() {
    // Hide the shape first
    document.getElementById("shape").style.display = "none";
    // Random delay between 0.5s and 2s
    var delay = Math.random() * 1500 + 500;
    setTimeout(showShape, delay);
}

move();

document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    alert("You clicked in " + timeTaken + " seconds");
    move();
}
