document.addEventListener("DOMContentLoaded", function() {
  // Get references to the link and hidden section
  var thailandLink = document.getElementById("thailand-link");
  var thailandPlaces = document.getElementById("thailand-places");

  // Add a click event listener to the Thailand link
  thailandLink.addEventListener("click", function() {
    // Toggle the visibility of the tourist places section
    if (thailandPlaces.style.display === "none") {
      thailandPlaces.style.display = "block";
    } else {
      thailandPlaces.style.display = "none";
    }
  });
});
