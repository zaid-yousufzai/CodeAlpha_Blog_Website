let icon = document.querySelector(" .icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", () => {
  ul.classList.toggle("show");

  if (ul.className == "show") {
    document.getElementById("bar").className = "fa-solid fa-xmark";
  } else {
    document.getElementById("bar").className = "fa-solid fa-bars";
  }
});

let flag = 0;
function move(x) {
  flag = flag + x;
  slideshow(flag);
}

slideshow(flag); //this is done so that there is always one slide will be display every time before clicking on the arrow

function slideshow(num) {
  let slides = document.getElementsByClassName("slide");

  if (num == slides.length) {
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }

  for (let i of slides) {
    i.style.display = "none";
  }
  slides[num].style.display = "block";
}

function htmlblog() {
  location.href = "https://www.w3schools.com/html/html_intro.asp";
}

function cssblog() {
  location.href = "https://www.w3schools.com/css/css_intro.asp";
}

function jsblog() {
  location.href = "https://www.javatpoint.com/javascript-tutorial";
}

function btblog() {
  location.href =
    "https://getbootstrap.com/docs/4.0/getting-started/introduction/";
}

function reactblog() {
  location.href = "https://www.w3schools.com/react/react_intro.asp";
}

function javablog() {
  location.href = "https://www.w3schools.com/java/java_intro.asp";
}
