import Focus from './main';

const initExtension = async () => {
let youtube = new Focus('page-manager');
await youtube.getRandomImage()

youtube.addText();
 
// TODO uncomment below after done
//  let randomImg = await youtube.getRandomImage();
//  youtube.displayImage(randomImg, content);
youtube.displayImage(chrome.extension.getURL('images/pic.jpeg'), content);
};

initExtension();