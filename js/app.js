/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const navbar = document.querySelector(".navbar-list");
const section = document.getElementsByTagName("section");
const sectionArray = Array.prototype.slice.call(section); // Converts card elements to an array.
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


addNavlinks();


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

document.querySelectorAll("a[href^='#']").forEach(elem => {
  elem.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(elem.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

window.addEventListener("scroll", event => {
  let navigationLinks = document.querySelectorAll(".navbar-list li a");
  let fromTop = window.scrollY + 225;
 
  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);
   
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

document.addEventListener("click", (e) => {
  console.log(e.target.getAttribute("data-nav"));
});


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class "active" to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active