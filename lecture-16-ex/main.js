import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import confetti from 'canvas-confetti'

// // document.querySelector('#app').innerHTML = `
// //   <div>
// //     <a href="https://vitejs.dev" target="_blank">
// //       <img src="${viteLogo}" class="logo" alt="Vite logo" />
// //     </a>
// //     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
// //       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// //     </a>
// //     <h1>Hello Vite!</h1>
// //     <div class="card">
// //       <button id="counter" type="button"></button>
// //     </div>
// //     <p class="read-the-docs">
// //       Click on the Vite logo to learn more
// //     </p>
// //   </div>
// `
document.querySelector('button').addEventListener('click', () => {
  const end = Date.now() + (15 * 1000);
  // Go Blue!
  // https://brand.umich.edu/design-resources/colors/
  const colors = ['#FFCB05', '#00274C'];
  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
});
setupCounter(document.querySelector('#counter'))
