/**Create the navbar and add the list to the navbar */
function createNavBar() {
  const theUl = document.querySelector("#navbar__list");
  const listOfSections = document.querySelectorAll(".section");

  listOfSections.forEach((elm) => {
    const list = document.createElement("LI");
    const link = document.createElement("a");
    link.innerHTML = elm.getAttribute("data-nav");
    link.setAttribute("href", `#${elm.getAttribute("id")}`);
    list.appendChild(link);
    theUl.appendChild(list);
  });
}

/**Change navigation style on scroll*/
window.addEventListener("scroll", (event) => {
  let nav = document.querySelector(".navbar__menu");

  window.scrollY >= 44
    ? nav.classList.add("scroll")
    : nav.classList.remove("scroll");
});

/**Active Navigation on scroll */
window.addEventListener("scroll", (event) => {
  let links = document.querySelectorAll("nav ul li a");
  let fromTop = window.scrollY;

  links.forEach((lnk) => {
    let section = document.querySelector(lnk.hash);
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      lnk.classList.add("active");
    } else {
      lnk.classList.remove("active");
    }
  });
});

/**Create a back to top button */
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 150) {
    toTop.classList.add("btn_active");
  } else {
    toTop.classList.remove("btn_active");
  }
});
