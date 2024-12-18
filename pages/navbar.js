window.onload = function () {
  // Loading the navbar.html into the html files
  fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar").innerHTML = data;
    })
    .catch((error) => console.log("Error loading navbar: ", error));
};
