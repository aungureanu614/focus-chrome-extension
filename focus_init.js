import Focus from './main';

const initExtension = async () => {
  const youtube = new Focus('page-manager');
  Focus.addStyleClass('content__align', youtube.content);

  // get quote of the day
  const quoteObj = await Focus.getQuote('inspire');
  const quoteInfo = quoteObj.contents.quotes[0];
  const h2 = youtube.createText('h2');
  h2.innerHTML = `${quoteInfo.quote} <div class="heading--author__display">--${quoteInfo.author}</div>`;
  Focus.addStyleClass('beautText', h2);

  // get inspirational image
  const randomImg = await Focus.getRandomImage('inspirational');
  const imageObj = new Image();
  const image = youtube.setAndDisplayImage(randomImg, imageObj);
  Focus.addStyleClass('image-style', image);

  image.addEventListener('click', async () => {
    const newRandom = await youtube.getRandomImage('inspirational');
    youtube.setAndDisplayImage(newRandom, image);
  });

  // clear top right controls
  const topButtons = document.getElementById('buttons');
  youtube.removeContent(topButtons);
};

initExtension();
