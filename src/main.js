import register from './Templates/register/register.js';
import feed from './Templates/feed/feed.js';
import login from './Templates/login/login.js';
import busqueAjuda from './Templates/busqueAjuda/busqueAjuda.js';

const main = document.querySelector('#root');
const init = () => {
  main.innerHTML = '';
  switch (window.location.hash) {
    case '#register':
      main.appendChild(register());
      break;
    case '#feed':
      main.appendChild(feed());
      break;
    case '#busqueAjuda':
      main.appendChild(busqueAjuda());
      break;
    case '#login':
      main.appendChild(login());
      break;
    default:
      main.appendChild(login());
  }
};
window.addEventListener('load', () => {
  window.addEventListener('hashchange', init);
  init();
});
