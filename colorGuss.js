"use strict";

const colorsAll = document.querySelectorAll(".color");
const guessColorText = document.querySelector('.color_code');
const rgbcolor = []; //insert generated color
const win_lose = document.querySelector('.win_lose');

colorsAll.forEach((color) => {
  while (true) {
    const first = Math.floor(Math.random() * 256);
    const second = Math.floor(Math.random() * 256);
    const third = Math.floor(Math.random() * 256);
    const generatedColor = `rgb(${first}, ${second}, ${third})`;


    if (rgbcolor.includes(generatedColor) === false) {
      rgbcolor.push(generatedColor);
      color.style.background = generatedColor;
      break;
    }
  }
});

const index = Math.floor(Math.random() * rgbcolor.length);
const guessColor = rgbcolor[index];
guessColorText.innerHTML = guessColor;

colorsAll.forEach((color) =>{

    color.addEventListener('click', ()=>{
        const selectedColor = color.style.backgroundColor;
        if(guessColor === selectedColor){
            win_lose.style.display = 'block'
            win_lose.textContent = `🏆You Win 🥇`;
        }else{
            win_lose.style.display = 'block'

            win_lose.textContent = `You Lose 😭`;
            
        }
    })
})

