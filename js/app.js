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

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


addNavlinks();

function addNavlinks() {

  for (let i = 0; i < section.length; i++) {
    const newListItem = document.createElement("li");
    const newListLink = document.createElement("a");

    newListLink.textContent = section[i].getAttribute("data-nav");

    newListLink.setAttribute("href", "#" + section[i].getAttribute("id"));
    newListItem.appendChild(newListLink);
    navbar.appendChild(newListItem);
  }
}

document.querySelectorAll("a[href^='#']").forEach(elem => {
  elem.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(elem.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        offsetTop: 20
      });
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