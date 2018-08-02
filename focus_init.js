import Focus from './main';

const initExtension = async () => {
 let youtube = new Focus();
 const content = document.getElementById('page-manager');
 content.classList.add('align');
 youtube.addText(content);
 youtube.removeContent(content);
// TODO uncomment below after done
//  let randomImg = await youtube.getRandomImage();
//  youtube.displayImage(randomImg, content);
youtube.displayImage(chrome.extension.getURL('images/pic.jpeg'), content);
};

initExtension();