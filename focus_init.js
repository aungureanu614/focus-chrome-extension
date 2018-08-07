import Focus from './main';

const initExtension = async () => {
let youtube = new Focus('page-manager');
youtube.addStyleClass('content__align', youtube.content)

const h2 = youtube.addText();
youtube.addStyleClass('beautText', h2)
// await youtube.getRandomImage('inspirational');
// TODO uncomment below after done
 let randomImg = await youtube.getRandomImage('inspirational');
 const image = youtube.setAndDisplayImage(randomImg);
// const image = youtube.setAndDisplayImage(chrome.extension.getURL('images/pic.jpeg'));
youtube.addStyleClass('image-style', image);
};

initExtension();