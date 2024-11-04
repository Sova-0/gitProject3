const readMoreButton = document.querySelector('.brands__read-more-button');
const list = document.querySelector('.brands__list');
const readMoreText = document.querySelector('.brands__read-more-text');

function toggleButton () {
    list.classList.toggle('brands__list--visible');
    readMoreText.classList.toggle('brands__read-more-text--rot');
    if (list.classList.contains('brands__list--visible')) {
        readMoreText.textContent = 'Скрыть';
    } else {
        readMoreText.textContent = 'Показать все';
    }
    console.log('cal');
}

readMoreButton.addEventListener('click', toggleButton);