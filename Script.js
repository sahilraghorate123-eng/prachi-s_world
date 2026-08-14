// --- View Toggle Buttons ---
document.getElementById("cardBtn").onclick = function () {
  document.body.classList.remove("list-view");
};

document.getElementById("listBtn").onclick = function () {
  document.body.classList.add("list-view");
};

// --- Song Data Array (Updated File Paths) ---
const songs = [
  {
    title: "Tu Hi Mera",
    file: "music/Tu_Hi_Mera.mp3",
    image: "image/photo1.jpg"
  },
  {
    title: "Dhokha Dhadi",
    file: "music/Dhokha_Dhadi.mp3",
    image: "image/photo2.jpg"
  },
  {
    title: "Shirt Da Button",
    file: "music/Shirt_Da_Button.mp3",
    image: "image/photo3.jpg"
  },
  {
    title: "Tu Hi Haqeeqat",
    file: "music/Tu_Hi_Haqeeqat.mp3",
    image: "image/photo4.jpg"
  },
  {
    title: "Maula Maula",
    file: "music/Maula_Maula__Re.mp3",
    image: "image/photo5.jpg"
  },
  {
    title: "Kinna Sona",
    file: "music/Kinna_Sona.mp3",
    image: "image/photo6.jpg"
  },
  {
    title: "Tera Fitoor",
    file: "music/Tera_Fitoor.mp3",
    image: "image/photo7.jpg"
  },
  {
    title: "Fakira",
    file: "music/Fakira.mp3",
    image: "image/photo8.jpg"
  },
  {
    title: "Qaafirana",
    file: "music/Qaafirana.mp3",
    image: "image/photo9.jpg"
  },
  {
    title: "Dekh Lena",
    file: "music/DEKH_LENA.mp3",
    image: "image/photo10.jpg"
  }
];

// --- Audio Player Elements ---
const audio = document.getElementById("audioPlayer");
const playBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const songTitle = document.getElementById("nowPlayingSong");
const songImage = document.getElementById("nowPlayingImg");

const progressBar = document.getElementById("progressBar");
const currentTimeText = document.getElementById("currentTime");
const totalTimeText = document.getElementById("totalTime");

let currentSong = 0;

// --- Helper Functions ---
function highlightCard(index) {
  document
    .querySelectorAll(".song-card")
    .forEach((card) => card.classList.remove("active"));

  const cards = document.querySelectorAll(".song-card");
  if (cards[index]) {
    cards[index].classList.add("active");
  }
}

function loadSong(index) {
  audio.src = songs[index].file;
  songTitle.innerText = songs[index].title;
  songImage.src = songs[index].image;

  highlightCard(index);
}

// Initial load
loadSong(currentSong);

// --- Controls ---
playBtn.onclick = function () {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸";
  } else {
    audio.pause();
    playBtn.innerText = "▶";
  }
};

nextBtn.onclick = function () {
  currentSong++;
  if (currentSong >= songs.length) {
    currentSong = 0;
  }
  loadSong(currentSong);
  audio.play();
  playBtn.innerText = "⏸";
};

prevBtn.onclick = function () {
  currentSong--;
  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }
  loadSong(currentSong);
  audio.play();
  playBtn.innerText = "⏸";
};

function playSong(index) {
  currentSong = index;
  loadSong(currentSong);
  audio.play();
  playBtn.innerText = "⏸";
}

document.querySelector(".main-play").onclick = function () {
  currentSong = 0;
  loadSong(currentSong);
  audio.play();
  playBtn.innerText = "⏸";
};

// --- Progress & Time Sync ---
audio.addEventListener("timeupdate", function () {
  if (audio.duration) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;

    let currentMin = Math.floor(audio.currentTime / 60);
    let currentSec = Math.floor(audio.currentTime % 60);
    let totalMin = Math.floor(audio.duration / 60);
    let totalSec = Math.floor(audio.duration % 60);

    if (currentSec < 10) currentSec = "0" + currentSec;
    if (totalSec < 10) totalSec = "0" + totalSec;

    currentTimeText.innerText = currentMin + ":" + currentSec;
    totalTimeText.innerText = totalMin + ":" + totalSec;
  }
});

progressBar.addEventListener("input", function () {
  if (audio.duration) {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
  }
});

audio.addEventListener("ended", function () {
  currentSong++;
  if (currentSong >= songs.length) {
    currentSong = 0;
  }
  loadSong(currentSong);
  audio.play();
});

// --- Popup & Navigation Helpers ---
function openPopup(id) {
  const element = document.getElementById(id);
  if (element) element.style.display = "block";
}

function closePopup(id) {
  const element = document.getElementById(id);
  if (element) element.style.display = "none";
}

document.getElementById("secretBtn").onclick = function () {
  document.getElementById("secretPopup").style.display = "flex";
};

document.getElementById("closePopup").onclick = function () {
  document.getElementById("secretPopup").style.display = "none";
};

document.getElementById("meetBtn").onclick = function () {
  document.getElementById("profilePopup").style.display = "block";
};

document.getElementById("aboutBtn").onclick = function () {
  document.getElementById("aboutSection").style.display = "block";
};

document.getElementById("playlistBtn").onclick = function () {
  document.getElementById("playlistSection").scrollIntoView({
    behavior: "smooth"
  });
};

document.getElementById("supportBtn").onclick = function () {
  window.open(
    "https://www.instagram.com/prachiii__90?igsh=MTdiNWtsYXJmdzhheg==",
    "_blank"
  );
};
