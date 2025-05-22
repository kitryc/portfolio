let lightmode = localStorage.getItem('lightmode');
const themeSwitch = document.getElementById('theme-switch');
if (!themeSwitch) console.warn("theme-switch button not found!");

const enableLightMode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableLightMode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if(lightmode === "active")  enableLightMode()

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightMode() : disableLightMode()
})

// console.log("Theme switch loaded");

// let lightmode = localStorage.getItem('lightmode');
// const themeSwitch = document.getElementById('theme-switch');

// const enableLightMode = () => {
//     document.body.classList.add('lightmode');
//     localStorage.setItem('lightmode', 'active');
// };

// const disableLightMode = () => {
//     document.body.classList.remove('lightmode');
//     localStorage.setItem('lightmode', 'disabled');
// };

// // Enable light mode on page load if previously active
// if (lightmode === 'active') {
//     enableLightMode();
// }

// themeSwitch?.addEventListener('click', () => {
//     lightmode = localStorage.getItem('lightmode');
//     if (lightmode !== 'active') {
//         enableLightMode();
//     } else {
//         disableLightMode();
//     }
// });
