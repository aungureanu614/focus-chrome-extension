// const content = document.getElementById('page-manager').children[0];
// content.parentNode.removeChild(content);
// const parent = document.getElementById('page-manager');
// const text = document.createElement('h2');
// text.innerText = 'Get back to building your dreams!';
// parent.appendChild(text);
// const image = document.createElement('img');
// let source = chrome.extension.getURL('images/image1.jpg');
// image.src = source;
// parent.appendChild(image);
// parent.classList.add('align');
// text.classList.add('beautText');
import clientId from './client_id';

class Focus {
    constructor() {
       
    }

    async getRandomImage() {
        const url = `https://api.unsplash.com/photos/random?client_id=${clientId}`
    
        let response = await fetch(url);
        return await response.json();        
    }

    displayImage(randomImg) {
        const content = document.getElementById('page-manager').children[0];
        content.parentNode.removeChild(content);
        const parent = document.getElementById('page-manager');
        const image = document.createElement('img');
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