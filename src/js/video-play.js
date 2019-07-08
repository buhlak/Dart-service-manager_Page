const video = document.getElementById('video-file');
const playBtn = document.getElementById('play-button');
const playBtnSign = document.getElementById('play-button-sign');

function playVideo() {
    video.play().then(() => {
        !video.controls ? video.controls = true : console.log('norm');
    }).then(() => {
        if (video.controls) {
            playBtn.style.display = 'none';
            playBtnSign.style.display = 'none';
        }
    });
}

document.addEventListener('click', (event) => {
    let target = event.target;
    console.log();
    if (target === video || target === playBtn) {
        playVideo();
    }
});

