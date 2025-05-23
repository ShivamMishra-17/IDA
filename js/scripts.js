const video = document.getElementById("promoVideo");
const button = document.getElementById("playBtn");
const wrapper = document.getElementById("videoWrapper");
const btnIcon = document.getElementById("btnIcon");

// SVG paths for play and pause icons
const playIconPath = "M8 5v14l11-7z";
const pauseIconPath = "M6 19h4V5H6v14zm8-14v14h4V5h-4z";

function setButtonToPlay() {
  btnIcon.innerHTML = `<path d="${playIconPath}"></path>`;
  button.setAttribute("aria-label", "Play video");
}

function setButtonToPause() {
  btnIcon.innerHTML = `<path d="${pauseIconPath}"></path>`;
  button.setAttribute("aria-label", "Pause video");
}

// Play video on button click, toggle play/pause depending on state
button.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// When video plays, update UI and wrapper class
video.addEventListener("play", () => {
  wrapper.classList.add("playing");
  setButtonToPause();
});

// When video pauses, update UI and wrapper class
video.addEventListener("pause", () => {
  wrapper.classList.remove("playing");
  setButtonToPlay();
});

// Show pause button on hover if video is playing
wrapper.addEventListener("mouseenter", () => {
  if (!video.paused) {
    button.style.opacity = "1";
    button.style.pointerEvents = "auto";
  }
});

// Hide button on mouse leave if video is playing
wrapper.addEventListener("mouseleave", () => {
  if (!video.paused) {
    button.style.opacity = "0";
    button.style.pointerEvents = "none";
  }
});
