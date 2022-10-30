document.getElementById("toggle-menu").onclick = function () { toggleMenu() };

function toggleMenu() {
    var mainNav = document.getElementById("main-nav");
    if (mainNav.style.display == 'none') {
        mainNav.style.display = 'flex';
    } else {
        mainNav.style.display = 'none';
    }
}

var activeNav = document.querySelectorAll(".nav-link");
activeNav.forEach(nav => {
    nav.addEventListener('click', function () {
        activeNav.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    })
})
