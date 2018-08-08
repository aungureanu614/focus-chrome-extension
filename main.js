import auth from './auth';
import Unsplash from 'unsplash-js';

export default class Focus {
    constructor(selector) {
        this.content = document.getElementById(selector);
        this.removeContent();
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

        const response = await unsplash.photos.getRandomPhoto({query: imgTag})
        const responseJson = await response.json(); 
        return responseJson.urls.regular; 
    }

    async getQuote(category) {
        const url = `https://quotes.rest/qod?category=${category}`;
        const response = await fetch(url);
        return await response.json();
    }

    removeContent(el = this.content) {
        el.innerHTML = '';
    }

    addStyleClass(className, el) {
        el.classList.add(className);
    }

    setAndDisplayImage(randomImg, image) {
        // const image = new Image();
        image.src = randomImg;
        this.content.appendChild(image);
        return image;
    }

    createText(el) {
        const elem = document.createElement(el);
        this.content.appendChild(elem);
        return elem;
    }
}