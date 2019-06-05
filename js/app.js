window.onscroll = () => {
  // console.log(window.scrollY)

  let scroll = window.scrollY;
  // Selecciona <div class="header-scroll"></div>
  const headerScroll = document.querySelector(".header-scroll");

  if (scroll > 300) {
    headerScroll.classList.add("activo");
  } else {
    headerScroll.classList.remove("activo");
  }
};
