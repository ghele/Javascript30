/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const playerButton = player.querySelector('.player__button');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreenButton = player.querySelector('.fullscreen__button');

/* Build out functions */
function togglePlay() {
  // const method = video.paused ? 'play' : 'paused';
  // video[method]();
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  playerButton.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

let isNotFullScreen = (document.fullscreenElement       === null) ||
                      (document.msFullscreenElement     === null) ||
                      (document.webkitFullscreenElement === null) ||
                      (document.mozFullScreenElement    === null);

function toggleFullScreen() {
  if (isNotFullScreen) {
    launchIntoFullscreen();
  } else {
    exitFullscreen();
  }
}

function launchIntoFullscreen() {
  if(video.requestFullscreen) {
    video.requestFullscreen();
  } else if(video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if(video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if(video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

playerButton.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e) );
progress.addEventListener('mousemove', () => mousedown = true);
progress.addEventListener('mousemove', () => mousedown = false);

fullscreenButton.addEventListener('click', toggleFullScreen);
