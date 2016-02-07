(function() {
  'use strict';

  function navShowerHider () {
    var toc = document.getElementById("toc");
    var close = document.getElementById("close");
    var nav = document.getElementById("nav");
    var header = document.getElementById("header");


    toc.addEventListener("click", function (event) {
      event.preventDefault();
      toc.style.display = "none";
      nav.style.display = "flex";
      header.style.justifyContent = "space-around";
    });

    close.addEventListener("click", function (event) {
      event.preventDefault();
      nav.style.display = "none";
      toc.style.display = "block";
      header.style.justifyContent = "flex-end";
    });

  }

  window.onload = navShowerHider;
}());
