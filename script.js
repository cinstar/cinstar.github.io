// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scroll-progress-bar").style.width = scrolled + "%";
}

// Highlights the current page section in the nav bar
function highlightNavbar() {
    var btn1 = document.getElementById("nav-projects");
    btn1.onclick = function() {
        btn1.classList.add("active");
    };
}
