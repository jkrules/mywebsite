window.addEventListener("scroll", function(e) {
    var scrolled = window.pageYOffset;
    const background = document.getElementById("demo");
    background.style.backgroundPositionY =  + (scrolled * 0.5) + 'px';
    const logo = document.getElementById("demo2");
    logo.style.transform =  "translate3d(0px," + (scrolled * 0.4) + 'px' + ", 0px)";
})

const settings = { delay: 100,
                   duration: 1500,
                   reset: true}

ScrollReveal().reveal('.card', settings);
ScrollReveal().reveal('.parallax1 h1', settings);
ScrollReveal().reveal('.parallax2 h1', settings);
ScrollReveal().reveal('.logo', settings);
