var toggleButton = document.querySelector('.toggle-button');
var sidebar = document.querySelector('#sidebar');
var backdrop = document.querySelector('.backdrop')
var languagesModal = document.querySelector('.languages-modal');
var languageSelector = document.querySelector('.language-selector');
var closeModal = document.querySelector('.close-modal');

toggleButton.addEventListener("click", function(){
    sidebar.classList.add("open");
    backdrop.style.display = "block";
})

backdrop.addEventListener("click", function() {
    sidebar.classList.remove('open');
    backdrop.style.display = "none";
})

languageSelector.addEventListener("click", function() {
    languagesModal.classList.add('open-modal');
    backdrop.style.display = "block";
})

closeModal.addEventListener("click", function() {
    languagesModal.classList.remove("open-modal");
    backdrop.style.display = "none";
}, 10)