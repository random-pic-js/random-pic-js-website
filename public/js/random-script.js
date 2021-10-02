const cards = document.querySelectorAll(".card"),
    sidebar = document.querySelector('.sidebar'),
    logoDetails = document.querySelector('.logo-details'),
    closeBtn = document.querySelector('#btn');

function getImg(card) {
  if (!(card instanceof Element && card.classList.contains("card"))) return;
  return card.querySelector(".card__image");
}

function appear(card) {
  card.classList.remove("card_hidden");
}

function init() {
  [...cards].forEach((card, index) => {
    const cardImg = getImg(card);
    cardImg.addEventListener("load", () => {
      cardImg.parentElement.classList.add("card__image_loaded");
    });

    setTimeout(() => {
      appear(card);
    }, 200 + index * 50);
  });
}

function menuBtnChange()
{
  if (sidebar.classList.contains('open'))
    closeBtn.classList.replace('bi-list', 'bi-list-nested');
  else
    closeBtn.classList.replace('bi-list-nested','bi-list');
}

logoDetails.addEventListener('click', () =>
{
  sidebar.classList.toggle('open');
  menuBtnChange();
});

window.addEventListener("DOMContentLoaded", init);