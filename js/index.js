const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        burger.classList.toggle('toggle');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.1}s`;
            }
        });


    });
    window.addEventListener('scroll', () => {
        nav.classList.remove('nav-active');
        console.log("scrolled")
        burger.classList.remove('toggle');
        navLinks.forEach((link, index) => {
            link.style.animation = ``;
        });


    });


}

navSlide();