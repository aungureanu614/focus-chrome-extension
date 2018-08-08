import Focus from './main';

const initExtension = async () => {
let youtube = new Focus('page-manager');
youtube.addStyleClass('content__align', youtube.content)

const h2 = youtube.createText('h2');
let quoteObj = await youtube.getQuote('inspire');
let quoteInfo = quoteObj.contents.quotes[0];
h2.innerHTML = `${quoteInfo.quote} <div class="heading--author__display">--${quoteInfo.author}</div>`;
youtube.addStyleClass('beautText', h2)

let randomImg = await youtube.getRandomImage('inspirational');
const image = youtube.setAndDisplayImage(randomImg);

youtube.addStyleClass('image-style', image);
const topButtons = document.getElementById('buttons');
youtube.removeContent(topButtons);
};

initExtension();