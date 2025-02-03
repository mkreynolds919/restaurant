import homepageSplash from './assets/images/homepagesplash.jpg';

const homepageLoad = function() {
    
    const splashImg = document.createElement("img");
    splashImg.src = homepageSplash;
    splashImg.id = 'homepage-splash';
    document.body.appendChild(splashImg);
}