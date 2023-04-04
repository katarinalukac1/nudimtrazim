window.addEventListener("load", function() {
    var header = document.querySelector("header");
    var stickyHeaderHeight = 100;
    
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > stickyHeaderHeight) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
});