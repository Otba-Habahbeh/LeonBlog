let btnToUp = document.querySelector(".fa-arrow-alt-circle-up");

window.onscroll = function () {
  if (window.scrollY >= 400) {
    btnToUp.style.display = "block";
  } else {
    btnToUp.style.display = "none";
  }
};

btnToUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
