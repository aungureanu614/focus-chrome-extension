import auth from './auth';
import Unsplash from 'unsplash-js';

export default class Focus {
    constructor(selector) {
        this.content = document.getElementById(selector);
        const childContent = this.content.children[0];
        childContent.parentNode.removeChild(childContent);
    }

    async getRandomImage(imgTag) {
        const unsplash = new Unsplash({
            applicationId: auth.applicationId,
            secret: auth.secret,
            callbackUrl: auth.callbackUrl,
            headers: {
                mode: 'no-cors'
            }
        })

        let response = await unsplash.photos.getRandomPhoto({query: imgTag})
        let responseJson = await response.json(); 
        return responseJson.urls.regular; 
    }

    async getQuote(category) {
        const url = `https://quotes.rest/qod?category=${category}`;
        let response = await fetch(url);
        return await response.json();
    }

    addStyleClass(className, el) {
        el.classList.add(className);
    }

    setAndDisplayImage(randomImg) {
        const image = new Image();
        image.src = randomImg;
        this.content.appendChild(image);
        return image;
    }

    appendText(el) {
        const elem = document.createElement(el);
        this.content.appendChild(elem);
        return elem;
    }
}