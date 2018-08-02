import auth from './auth';
import Unsplash from 'unsplash-js';

class Focus {

    async getRandomImage() {
        const unsplash = new Unsplash({
            applicationId: auth.applicationId,
            secret: auth.secret,
            callbackUrl: auth.callbackUrl,
        })

        let response = await unsplash.photos.getRandomPhoto({query: "inspirational"})
        return await response.json();    
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

const initExtension = async () => {
 let youtube = new Focus();
 const content = document.getElementById('page-manager');
 content.classList.add('align');
 youtube.addText(content);
 youtube.removeContent(content);
// TODO uncomment below after done
//  let randomImg = await youtube.getRandomImage();
//  youtube.displayImage(randomImg.urls.regular);
youtube.displayImage(chrome.extension.getURL('images/pic.jpeg'), content);
};

initExtension();