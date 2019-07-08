const arrowElem = document.getElementsByClassName('services-about__drop-down-arrow');
const toogleItem = document.getElementsByClassName('services-about__item');
document.addEventListener('click', (event) => {
    let target = event.target;
    for (let i = 0; i < arrowElem.length; i++) {
        if (arrowElem[i] === target) {
            [].forEach.call(toogleItem, (elem) => {
                elem.classList.remove('services-about__item--active');
            });
            toogleItem[i].classList.toggle('services-about__item--active');
        }
    }
});

