document.addEventListener("DOMContentLoaded", () => {
    const sideBar =  document.querySelector('.fancy-icons');
    const closeIcon = document.querySelector('.fancy-icon2');

    closeIcon.addEventListener("click", () => {
        sideBar.classList.toggle('active');
    });
    
});

document.addEventListener("DOMContentLoaded", () => {
    const firstD = document.querySelector('.f-dd-1');
    const dropdown1 = document.querySelector('.first-drop-down');

    firstD.addEventListener("click", () =>{
        dropdown1.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const secndD = document.querySelector('.second-dd');
    const dropdown2 = document.querySelector('.dd-2');

    secndD.addEventListener("click", () => {
        dropdown2.classList.toggle('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const thirdD = document.querySelector('.third-dd');
    const dropdown3 = document.querySelector('.dd-3');

    thirdD.addEventListener("click", () => {
        dropdown3.classList.toggle('active');
    });
});



