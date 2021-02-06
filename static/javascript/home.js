const navbar = document.querySelector("nav")
const navbarToggler = document.querySelector(".navbar-toggler");


navbarToggler.addEventListener('click', function(e){
    console.log(e);
    navbar.classList.toggle("background")
});

document.querySelector('body').addEventListener('scroll', function(e){
    if(scrollY < 10) 
    navbar.style.background ="none";
    else
    {   console.log(e);
        navbar.style.background = "rgba(21, 21, 224, 0.644)";
    }
})