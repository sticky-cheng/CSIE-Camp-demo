function changeImage(src) {
    document.querySelector("img").src = "../images/" + src + ".png";
}

document.body.onmousedown = function () {
    changeImage("unko_gorilla");
}
document.body.onmouseup = function () {
    changeImage("gorilla_banana");
}