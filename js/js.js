(function () {
    "use strict";
    const typed = document.getElementsByClassName("typed");
    if (typed) {
      let typed_strings = ["The world's first multilingual programming language 🌎", "Taking Programming to the next level ✨🚀", "Feel the power of the future AI + Programming ✨❤"];
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
    const typed2 = document.getElementsByClassName("typed_info");
    if (typed2) {
      let typed_strings = ["23+ Languages Availabe 🌎✨", "Helping Future Generations To Keep Pace with Tech 👨‍💻👩‍💻", "Opening doors for 82% non-English speakers globally ✨🚀"];
      new Typed('.typed_info', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }

})()
