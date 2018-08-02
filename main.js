import auth from './auth';
import Unsplash from 'unsplash-js';

export default class Focus {

    async getRandomImage() {
        const unsplash = new Unsplash({
            applicationId: auth.applicationId,
            secret: auth.secret,
            callbackUrl: auth.callbackUrl,
            headers: {
                mode: 'no-cors'
            }
        })

        let response = await unsplash.photos.getRandomPhoto({query: "inspirational"})
        let responseJson = await response.json(); 
        return responseJson.urls.regular; 
    }

    removeContent(content) {
        const childContent = content.children[0];
        childContent.parentNode.removeChild(childContent);
    }

    displayImage(randomImg,content) {
        const image = new Image();
        image.src = randomImg;
        image.classList.add('image-style');
        content.appendChild(image);
    }

    addText(content) {
        const h2 = document.createElement('h2');
        h2.innerText = "Get back to building your dreams!";
        h2.classList.add('beautText');
        content.appendChild(h2);
    }
}