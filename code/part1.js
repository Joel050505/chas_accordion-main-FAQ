// A function that adds and remove the class "active" on the section you click on.
function toggle(e) {
  const element = e.target.nextElementSibling;
  element.classList.toggle("active");
}

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
// const section1Element = document.getElementById("section1");
// const section2Element = document.getElementById("section2");
// const section3Element = document.getElementById("section3");

const sections = document.querySelectorAll(".title");
sections.forEach((section) => {
  section.addEventListener("click", toggle);
});

// section1Element.addEventListener("click", toggle);
// section2Element.addEventListener("click", toggle);
// section3Element.addEventListener("click", toggle);
