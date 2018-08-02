import auth from './client_id';
import Unsplash from 'unsplash-js';

class Focus {

    async getRandomImage() {
        const unsplash = new Unsplash({
            applicationId: auth.applicationId,
            secret: auth.secret,
            callbackUrl: auth.callbackUrl,
            headers: {
                mode: 'no-cors'
            }
        })

        let response = await unsplash.photos.getRandomPhoto({})
        return await response.json();    
    }

    displayImage(randomImg) {
        const content = document.getElementById('page-manager').children[0];
        content.parentNode.removeChild(content);
        const parent = document.getElementById('page-manager');
        const sections = document.getElementById('sections');
        sections.parentNode.removeChild(sections);
        const image = new Image();
        image.src = randomImg;
        parent.appendChild(image);
    }
}

const fetchAndDisplayImage = async () => {
 let youtube = new Focus();
 let randomImg = await youtube.getRandomImage();
 youtube.displayImage(randomImg.urls.regular);
};

fetchAndDisplayImage();