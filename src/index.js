import './styles.css';
import kikiandbouba from './assets/images/kikiandbouba.png';

function cleanPage() {
    const contents = document.querySelectorAll('#content *');
    contents.forEach((element) => {
        element.remove;
    });
}

(() => {
    const mainLogo = document.createElement("img");
    mainLogo.src = kikiandbouba;
    mainLogo.id = "main-logo";
    document.body.appendChild(mainLogo);
})();

