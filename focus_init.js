import Focus from './main';

const initExtension = async () => {
let youtube = new Focus('page-manager');
youtube.addStyleClass('content__align', youtube.content)

const h2 = youtube.appendText('h2');
let quoteObj = await youtube.getQuote('inspire');
console.log(quoteObj.contents.quotes[0])
let quoteInfo = quoteObj.contents.quotes[0];
h2.innerHTML = `${quoteInfo.quote} <div class="heading--author__display">--${quoteInfo.author}</div>`;
youtube.addStyleClass('beautText', h2)
await youtube.getRandomImage('inspirational');
// TODO uncomment below after done
//  let randomImg = await youtube.getRandomImage('inspirational');
//  const image = youtube.setAndDisplayImage(randomImg);
const image = youtube.setAndDisplayImage(chrome.extension.getURL('images/pic.jpeg'));
youtube.addStyleClass('image-style', image);
};

initExtension();