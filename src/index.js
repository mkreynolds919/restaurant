import './styles.css';
import kikiandbouba from './assets/images/kikiandbouba.png';

(() => {
    const mainLogo = document.createElement("img");
    mainLogo.src = kikiandbouba;
    mainLogo.id = "main-logo";
    document.body.appendChild(mainLogo);
})();

