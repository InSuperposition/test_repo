const toggleElement = document.querySelector(".test_class");
const toggleClasses = toggleElement.classList;

toggleElement.addEventListener("click", function toggleBackground(event) {
  toggleClasses.toggle("has_red_background");
});
