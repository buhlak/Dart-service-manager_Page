const photos = document.getElementsByClassName('team-cards__photo');
const description = document.getElementsByClassName('description--team-cards');
const teamCards = document.getElementsByClassName('team-cards')[0];
console.log(getComputedStyle(teamCards));


document.addEventListener('click', setUnsetActiveClass);

function setUnsetActiveClass(event) {
    let target = event.target;
    for (let i = 0; i < photos.length; i++) {
        if (photos[i] === target) {
            [].forEach.call(photos, (elem) => {
                elem.classList.remove('team-cards__photo--active');
            });
            [].forEach.call(description, (elem) => {
                elem.classList.remove('description--team-cards--active');
            });
            photos[i].classList.add('team-cards__photo--active');
            description[i].classList.add('description--team-cards--active');
        }
    }
}
