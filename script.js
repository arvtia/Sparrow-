document.addEventListener("DOMContentLoaded", () => {
    const sideBar =  document.querySelector('.fancy-icons');
    const closeIcon = document.querySelector('.fancy-icon2');
    closeIcon.addEventListener("click", () => {
        sideBar.classList.toggle('active');
    });
    
});

document.addEventListener("DOMContentLoaded", () => {
    // Select all dropdown toggles
    const dropdownToggles = document.querySelectorAll('.f-dd-1, .second-dd, .third-dd, .fourth_dd');
    const dropdowns = document.querySelectorAll('.first-drop-down, .dd-2, .dd-3, .dd-4');

    // Add event listeners to each toggle
    dropdownToggles.forEach((toggle, index) => {
        toggle.addEventListener("click", () => {
            dropdowns.forEach((dropdown, i) => {
                if (i !== index) {
                    dropdown.classList.remove('active'); // Close other dropdowns
                }
            });
            dropdowns[index].classList.toggle('active'); // Toggle the clicked dropdown
        });
    });
});






// -===========================================  removed the old version of drop down

// document.addEventListener("DOMContentLoaded", () => {
//     const firstD = document.querySelector('.f-dd-1');
//     const dropdown1 = document.querySelector('.first-drop-down');

//     firstD.addEventListener("click", () =>{
//         dropdown1.classList.toggle('active');
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const secndD = document.querySelector('.second-dd');
//     const dropdown2 = document.querySelector('.dd-2');

//     secndD.addEventListener("click", () => {
//         dropdown2.classList.toggle('active');
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const thirdD = document.querySelector('.third-dd');
//     const dropdown3 = document.querySelector('.dd-3');

//     thirdD.addEventListener("click", () => {
//         dropdown3.classList.toggle('active');
//     });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const fourthDd = document.querySelector('.fourth_dd');
//     const dropdown4 = document.querySelector('.dd-4');

//     fourthDd.addEventListener("click", () => {
//         dropdown4.classList.toggle('active');
//     })
// })