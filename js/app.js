/** 
 Global Variables
 **/
const navbar = document.querySelector(".navbar-list");
const menuToggle = document.querySelector(".menu-toggle");
const section = document.getElementsByTagName("section");
const sectionArray = Array.prototype.slice.call(section);

addNavlinks();

// This function dynamically creates links to navbar every time a section is added.
function addNavlinks() {

  sectionArray.forEach(item => {
    const newListItem = document.createElement("li");
    const newListLink = document.createElement("a");

    newListLink.textContent = item.getAttribute("data-nav");

    newListLink.setAttribute("href", "#" + item.getAttribute("id"));

    newListItem.appendChild(newListLink);

    navbar.appendChild(newListItem);
  })
}

// This loops through all dynamic links and attaches click event listeners that scrolls to their respective sections. 
document.querySelectorAll("a[href^='#']").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(item.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// This adds active class to the links in navbar when user scrolls to past their corresponding sections.
window.addEventListener("scroll", event => {
  let navigationLinks = document.querySelectorAll(".navbar-list li a");
  let fromTop = window.scrollY + 225;

  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// This even listener toggles displaying and hiding mobile menu.
menuToggle.addEventListener("click", () => {
  if (navbar.classList.contains("show-mobile-menu")) {
    navbar.classList.add("hide-mobile-menu");
    navbar.classList.remove("show-mobile-menu");
  } else {
    navbar.classList.remove("hide-mobile-menu");
    navbar.classList.add("show-mobile-menu");
  }
});

function viewportChange(mediaQuery) {
  // if viewport is beyond 1200px, mobile menu is hidden. If below that, it is visible.
  if (mediaQuery.matches) {
    navbar.classList.remove("show-flex-menu");
    navbar.classList.remove("show-mobile-menu");
    navbar.classList.add("hide-mobile-menu");
  } else {
    navbar.classList.add("show-flex-menu");
    navbar.classList.remove("show-mobile-menu");
    navbar.classList.remove("hide-mobile-menu");
  }
}

// Watches for changes in viewport to add or remove appropriate classes accordingly.
if (matchMedia) {
  const mediaQuery = window.matchMedia("(max-width: 1200px)");

  mediaQuery.addListener(viewportChange);
  viewportChange(mediaQuery);
}

