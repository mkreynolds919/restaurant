import homepageSplash from './assets/images/homepagesplash.jpeg';
import './homepage.css';

const homepageLoad = function() {

    const content = document.querySelector("#content");

    const splashImg = document.createElement("img");
    splashImg.src = homepageSplash;
    splashImg.id = 'homepage-splash';
    content.appendChild(splashImg);

    const newArrivals = document.createElement("div");
    newArrivals.id = "new-arrivals";
    content.insertBefore(newArrivals, splashImg);

    const reviews = document.createElement("div");
    reviews.id = "reviews";
    content.appendChild(reviews);

   
}

export default homepageLoad;
