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

document.addEventListener("click", (e) => {
  console.log(e.target.getAttribute("data-nav"));
});

function addNavlinks() {
 

  for (let i = 0; i < section.length; i++) {
     const newListItem = document.createElement("li");
    newListItem.textContent = section[i].getAttribute("data-nav");
    console.log(section[i].getAttribute("data-nav"));
    
navbar.appendChild(newListItem);
  }

}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active