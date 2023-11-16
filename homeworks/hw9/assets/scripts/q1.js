document.getElementById("q1-btn-red").addEventListener("click", function() {
    setBackgroundColor('#EF476F');
});
document.getElementById("q1-btn-yellow").addEventListener("click", function() {
    setBackgroundColor('#FFD166');
});

document.getElementById("q1-btn-lightblue").addEventListener("click", function() {
    setBackgroundColor('#118AB2');
});

document.getElementById("q1-btn-blue").addEventListener("click", function() {
    setBackgroundColor('#073B4C');
});

document.getElementById("q1-btn-green").addEventListener("click", function() {
    setBackgroundColor('#06D6A0');
});


function setBackgroundColor(color) {
    var background = document.getElementById("q1-container");
  background.style.backgroundColor = color;
}
