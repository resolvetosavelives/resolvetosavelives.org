document.addEventListener("DOMContentLoaded", function() {
    var menuItem = document.querySelector('.menu-item a');
    console.log(menuItem);

    menuItem.addEventListener('click', function() {
        var submenu = document.querySelector('.submenu');
        submenu.classList.toggle('active');
    });
});