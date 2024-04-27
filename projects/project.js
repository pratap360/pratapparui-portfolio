'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



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


function redirectTo(url) {
  window.open(url, '_blank');
}
