// Load the navbar after loading the page
window.onload = function () {
  // Loading the navbar.html into the html files
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;

      // After the navbar is loaded, highlight the active link
      highlightActiveLink();
    })
    .catch((error) => console.log("Error loading navbar: ", error));
};

// Highlight the active link in the navbar
function highlightActiveLink() {
  // Get the current page URL path
  const currentPage = window.location.pathname;

  // Get all navigation links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Loop through all the links
  navLinks.forEach((link) => {
    // If the link's href matches the current page, add the 'active' class
    if (link.href.includes(currentPage)) {
      link.classList.add("active");
    }
  });
}
