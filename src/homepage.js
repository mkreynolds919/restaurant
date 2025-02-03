import homepageSplash from './assets/images/homepagesplash.jpeg';
import './homepage.css';

const homepageLoad = function() {
    const content = document.querySelector("#content");
    const splashImg = document.createElement("img");
    splashImg.src = homepageSplash;
    splashImg.id = 'homepage-splash';
    content.appendChild(splashImg);
}

export default homepageLoad;
