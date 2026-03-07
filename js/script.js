'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// * model script for testimonials section 👇🏼

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalRole = document.querySelector("[data-modal-role]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalRole.innerHTML = this.querySelector("[data-testimonials-role]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


const emailInput = document.getElementById('email');
const formfeild = document.getElementById('contact');

formfeild.addEventListener('submit', function(event) {
  const email = emailInput.value.trim();
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(email)) {
    event.preventDefault(); // Prevent form submission
    alert('Please enter a valid email address.');
    emailInput.focus(); // Set focus on the email input
    return; // Exit the function
  }

  // Submit the form if email is valid (rest of your submission logic)
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}



// * model script for Projects section 👇🏼

// Projects variables
// const projectsItem = document.querySelectorAll("[data-project-item]");
// const poverlay = document.querySelector("[data-poverlay]");
// const mprojectCategory = document.querySelector("[data-model-project-category]");
// const mprojectsContainer = document.querySelector("[data-modal-project]");
// const mprojectsCloseBtn = document.querySelector("[data-modal-projectclose-btn]");
// const mprojectName = document.querySelector("[data-modal-project-name]");
// const mprojectInfo = document.querySelector("[data-model-project-info]");

// modal toggle function
// const projectsModalFunc = function () {
//   mprojectsContainer.classList.toggle("active");
//   poverlay.classList.toggle("active");
// }

// add click event to all modal items
// for (let i = 0; i < projectsItem.length; i++) {
//   projectsItem[i].addEventListener("click", function () {
//     mprojectName.innerHTML = this.querySelector("[data-project-name]").innerHTML;
//     mprojectCategory.innerHTML = this.querySelector("[data-project-category]").innerHTML;
//     mprojectInfo.innerHTML = this.querySelector("[data-project-info]").innerHTML;
//     projectsModalFunc();
//   });
// }

// add click event to modal close button
// mprojectsCloseBtn.addEventListener("click", projectsModalFunc);
// poverlay.addEventListener("click", projectsModalFunc);












// to change dark mode on click
// const inp = document.getElementById('inp');

// inp.addEventListener('change', () => {
// 	document.body.classList.toggle('light');
// });


// ! LATEST LIGHT DARK MODE CODE 

function DarkLightMode() {
  const inp = document.getElementById('inp');
  var element = document.body;

  // On page load, set the mode to the one stored in localStorage
  const savedMode = localStorage.getItem('mode');
  if (savedMode) {
      element.classList[savedMode === 'light' ? 'add' : 'remove']('light');
      inp.checked = savedMode === 'light';
  }

  inp.addEventListener('change', () => {
    element.classList.toggle('light');

    // Save the current mode to localStorage
    if(element.classList.contains("light")){
      localStorage.setItem('mode', 'light');
  } else {
      localStorage.setItem('mode', 'dark');
  }
  });
}



// ! custom cursor 

const cursorDot = document.querySelector("[data-cursor-dot]") ;
const cursorOutline = document.querySelector("[data-cursor-outline]") ;

// Check screen width and hide cursor if on mobile/tablet
function handleResize() {
  if (window.innerWidth <= 1024) {
    cursorDot.style.display = "none";
    cursorOutline.style.display = "none";
  } else {
    cursorDot.style.display = "block";
    cursorOutline.style.display = "block";
  }
}

// Initial check
handleResize();

// Listen for window resize
window.addEventListener("resize", handleResize);


window.addEventListener("mousemove",function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`
  cursorDot.style.top = `${posY}px`

  // * with out animation 
  // cursorOutline.style.left = `${posX}px`
  // cursorOutline.style.top = `${posY}px`

  // * with animation 
  cursorOutline.animate({
    left:`${posX}px`,
    top: `${posY}px`
  },{duration: 300, fill: "forwards"});

})

function closeModal() {
  const modal = document.getElementById('custom-alert');
  modal.style.display = 'none';
  modal.classList.remove('success', 'error');
}

// Function to trigger Cal.com popup
function scrollToContact() {
  if (window.Cal && window.Cal.ns && window.Cal.ns['client-discussion-via-portfolio']) {
    window.Cal.ns['client-discussion-via-portfolio']('ui', {"hideEventTypeDetails":false,"layout":"month_view"});
  }
}









// Call the DarkLightMode function at the end of your script
DarkLightMode();


function scrollToContact() {
  const navLinks = document.querySelectorAll('[data-nav-link]');
  for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].innerHTML.toLowerCase() === 'contact') {
      navLinks[i].click();
      break;
    }
  }
}

// Toggle role content
function toggleRole(element) {
  const roleContent = element.nextElementSibling;
  const isActive = element.classList.contains('active');
  
  element.classList.toggle('active');
  roleContent.classList.toggle('active');
}