document.getElementById("image1").onmouseover = change();
document.getElementById("image1").onmouseout = changeBack();

function change() {
  document.getElementById("image1").src = "./assets/img/image1_2.jpg";
}
function changeBack() {
  document.getElementById("image1").src = "./assets/img/image1.jpg";
}
