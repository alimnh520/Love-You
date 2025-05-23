function rain() {
  let heart = document.querySelector('.heart');
  let e = document.createElement('div');
  e.classList.add('drop');
  heart.appendChild(e);
  
  let left = Math.floor(Math.random() * 270 + 10);
  e.style.left = left + 'px';
  
  let duration = Math.random() * 0.5;
  e.style.animationDuration = 1+duration+'s';
  
  setTimeout(() => {
    heart.removeChild(e);
  },5000);
}
setInterval(() => {
  rain();
},100);



const helloText = "I♡Love♡You";
const nameText = "Sameya";

// Function to animate text with a delay
function animateText(text, containerId, delay = 0) {
  const container = document.getElementById(containerId);
  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.setProperty('--i', index);
    span.style.animationDelay = `calc(0.1s * ${index} + ${delay}s)`;
    container.appendChild(span);
  });
}

// First animate 'Hello' with no delay
animateText(helloText, 'helloText');

// Then animate 'Kashfiya' with a delay after 'Hello' completes
const helloAnimationTime = helloText.length * 0.1; // Adjust delay based on length of 'Hello'
animateText(nameText, 'nameText', helloAnimationTime);


