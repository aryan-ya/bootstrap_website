function toggleSideNav() {
    var sideNav = document.getElementById("sideNav");
    var button = document.getElementById("sideNavButton");
    if (sideNav.style.width === "350px") {
      closeSideNav();
    } else {
      sideNav.style.width = "350px";
      button.innerHTML = "☰Close";
    }
  }
  
  function closeSideNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("sideNavButton").innerHTML = "☰Open";
  }
  
  // overlay 

  // script.js
function showImage() {
    const bigCircle = document.getElementById("bigCircle");
    bigCircle.style.backgroundImage = 'url("./image/pi")';
}
