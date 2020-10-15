const box = document.querySelector('.box');
const boxStyles = getComputedStyle(box);
const boxMainColor = boxStyles.getPropertyValue('--box-main-color');
console.log(boxMainColor);

const header = document.querySelector('header');
header.style.setProperty('--header-bg-color', boxMainColor);