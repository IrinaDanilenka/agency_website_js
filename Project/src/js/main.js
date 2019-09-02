var opener = document.querySelector('.gamburger-nav__line');
var items = document.querySelector('.gamburger-nav__items');
function toggleGamburger() {
    opener.classList.toggle('open');
    items.classList.toggle('open');
}
opener.addEventListener('click', toggleGamburger);