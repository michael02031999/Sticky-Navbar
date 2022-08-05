let navbar = document.getElementsByTagName("nav");
let firstNavDiv = document.getElementById("firstNavDiv");
let hyperlinkContainer = document.getElementById("hyperlinkContainer");

console.log(firstNavDiv);

window.onscroll = function () {
  scrollingFunction();
};

function scrollingFunction() {
  console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop >= 200) {
    navbar[0].classList.add("whiteNav");
    firstNavDiv.style.color = "black";
    hyperlinkContainer.style.color = "black";
  }
  if (document.documentElement.scrollTop <= 150) {
    navbar[0].classList.remove("whiteNav");
    firstNavDiv.style.color = "white";
    hyperlinkContainer.style.color = "white";
  }
}
