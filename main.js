import auth from './auth';
import Unsplash from 'unsplash-js';

export default class Focus {
    constructor(selector) {
        this.content = document.getElementById(selector);
        this._removeContent();
    }

    async getRandomImage(queryType) {
        const unsplash = new Unsplash({
            applicationId: auth.applicationId,
            secret: auth.secret,
            callbackUrl: auth.callbackUrl,
            headers: {
                mode: 'no-cors'
            }
        })

        let response = await unsplash.photos.getRandomPhoto({query: queryType})
        let responseJson = await response.json(); 
        return responseJson.urls.regular; 
    }

    _removeContent() {
        const childContent = this.content.children[0];
        childContent.parentNode.removeChild(childContent);
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

    addText() {
        const h2 = document.createElement('h2');
        h2.innerText = "Get back to building your dreams!";
        this.content.appendChild(h2);
        return h2;
    }
}