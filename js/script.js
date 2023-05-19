var options = {
    strings: ['Pratap Parui','Frontend Developer', 'UI/UX Designer', 'YouTuber ','Blogger'],
    typeSpeed: 90,
    backSpeed:50,
    loop: true
  };
var typed = new Typed('.typing', options);

// -------------------- Loading Screen --------------------------
// let spinnerWrapper = document.querySelector('.loading');

// window.addEventListener('load', function(){
//   spinnerWrapper.style.display= 'none';
// });
// -------------------- Loading Screen --------------------------


// -------------------- Menu sidebar ------------------------------------
// Menu show Y hidden
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');

// Show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});


// Hidden
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
});


// Remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction()
{
    navMenu.classList.remove('show');
};

navLink.forEach(n => n.addEventListener('click', linkAction));
// --------------------------------- Menu sidebar --------------------------

// ---------------- On menu click scroll to active link --------------------
// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active')
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active')
        }
    })
}
// ---------------- On menu click scroll to active link --------------------


// ---------------------- Dark/Light Toggle --------------------------------
const checkbox = document.getElementById('l-d-mode');

checkbox.addEventListener('change', () => {
    //change the theme mode
    document.body.classList.toggle('dark');
});
// ---------------------- Dark/Light Toggle --------------------------------