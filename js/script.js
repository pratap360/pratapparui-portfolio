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


















// Call the DarkLightMode function at the end of your script
DarkLightMode();


