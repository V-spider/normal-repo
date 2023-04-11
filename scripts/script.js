var search = document.querySelector(".header-search");
var modal = document.querySelector(".modal-diffuser");
search.addEventListener('click', (e) => {
    console.log(modal.classList)
    modal.classList.remove('hidden');
    console.log(modal.classList)
})

modal.addEventListener("click", (e) => {
 
  modal.classList.add("hidden");
  
});