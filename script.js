let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
let theme = document.getElementById("theme");
theme.onclick=function(){
   document.body.classList.toggle("dark-mode");   
   if(document.body.classList.contains("dark-mode")){
      theme.src="darklight/sun.png"
   }
   else{
      theme.src="darklight/moon.png"
   }
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
     sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
         navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*='+ id +']').classList.add('active');
         });
        };
     });

     let header = document.querySelector('header');

     header.classList.toggle('sticky', window.scrollY > 100);

     /*============remove toggle icon navbar whrn click navbar link===============*/
   menuIcon.classList.remove('bx-x');
   navbar.classList.remove( 'active');
};
ScrollReveal({ 
    reset:true,
    distance:'10px',
    duration:1500,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading,.projects-container,.about-img,.vertical,.title', { origin:'top' });
ScrollReveal().reveal('.home-img,.skills-blob,.qualification-country,.services-box,.contact-box,.date', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.qualification-name,.descr', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-content,', { origin:'right' });



const typed = new Typed('.multiple,heading', {
strings: ['Web Devloper','Ethical Hacker','Bug Hunter','Trainer' ],
typeSpeed:70,
backSpeed:70,
backDelay:1000,
loop:true
});

document.addEventListener("mousemove", parallex);
function parallex(e){
  this.querySelectorAll('.layer').forEach(layer=>{
      const speed = layer.getAttribute('data-speed')
      const X = (window.innerWidth - e.pageX*speed)/100
      const Y = (window.innerWidth - e.pageY*speed)/100

      layer.style.transform = 'translateX(${x}px) translateY(${y}px)'
   })
}

/*
document.addEventListener('contextmenu', 
     event => event.preventDefault()
);
document.addEventListener("keydown", function (event){
   if (event.ctrlKey){
      event.preventDefault();
   }
   if(event.keyCode == 123){
      event.preventDefault();
   }
});
*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

