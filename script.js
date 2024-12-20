document.addEventListener("mousemove", moveRond );

function moveRond(event) {
    let posX = event.pageX;
    let posY = event.pageY;
    let divR = document.getElementById("rond");
    divR.style.top = posY + "px";
    divR.style.left = posX + "px";
}