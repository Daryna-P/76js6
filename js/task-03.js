const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryEl = document.querySelector(`.gallery`);

const imagesEl = images.map((image) =>
  `<li><img src = ${image.url} alt = ${image.alt} width = 240></li>`
).join(``);

galleryEl.insertAdjacentHTML(`beforeend`, imagesEl);
galleryEl.style.display = `flex`;
galleryEl.style.flexDirection = `column`;
galleryEl.style.alignItems = `center`;
galleryEl.style.backgroundColor = `teal`;
galleryEl.style.gap = `30px`;
galleryEl.style.padding = `30px`
galleryEl.style.listStyle = `none`;
