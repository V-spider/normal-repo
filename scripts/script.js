var search = document.querySelector(".header-search");
var modal = document.querySelector(".modal-diffuser");
var ham = document.querySelector(".hum");
var mobileNav = document.querySelector(".mobile-nav");

search.addEventListener('click', (e) => {
    console.log(modal.classList)
    modal.classList.remove('hidden');
    console.log(modal.classList)
})

modal.addEventListener("click", (e) => {
 
  modal.classList.add("hidden");
  
});



ham.addEventListener('click', function (e) {
  if (!(ham.getAttribute("data-open") == "open")) {
    // close it
    ham.setAttribute("data-open", "open");
    for (let index = 0; index < ham.children.length; index++) {
      ham.children[index].classList.remove(`rotate-line${index + 1}`);
    }
    mobileNav.style.display = "none";
  } else {
    // open it\
    ham.setAttribute("data-open", "close");
    for (let index = 0; index < ham.children.length; index++) {
      ham.children[index].classList.add(`rotate-line${index + 1}`);
    }
    mobileNav.style.display = 'block';
  }
})