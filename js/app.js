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
