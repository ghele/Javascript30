function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;  // stop the function from running all together
  audio.currentTime = 0;  // rewind to the start
  audio.play();
  key.classList.add('playing');  // remove, toggle a class
  console.log("qwefg");
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;  // skip it if it's a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
// transition end event
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
