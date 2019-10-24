let image1 = document.getElementById("image1")//.object ?

image1.onmouseover = funtion (){ change() };
image1.onmouseout = fuction() { changeBack() };

function change() {
  image1.src = "./assets/img/image1_2.jpg";
}
function changeBack() {
  image1.src = "./assets/img/image1.jpg";
}
