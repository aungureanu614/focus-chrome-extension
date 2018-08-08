import Focus from './main';

const initExtension = async () => {

const youtube = new Focus('page-manager');
youtube.addStyleClass('content__align', youtube.content)

// get quote of the day
const quoteObj = await youtube.getQuote('inspire');
const quoteInfo = quoteObj.contents.quotes[0];
const h2 = youtube.createText('h2');
h2.innerHTML = `${quoteInfo.quote} <div class="heading--author__display">--${quoteInfo.author}</div>`;
youtube.addStyleClass('beautText', h2)

// get inspirational image
const randomImg = await youtube.getRandomImage('inspirational');
const image = youtube.setAndDisplayImage(randomImg);
youtube.addStyleClass('image-style', image);

// clear top right controls
const topButtons = document.getElementById('buttons');
youtube.removeContent(topButtons);
};

initExtension();