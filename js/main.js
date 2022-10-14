const menuIcon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('.sidebar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('active');
    menuIcon.style.margin = '1.5rem'
    sideBar.classList.toggle('active');
};