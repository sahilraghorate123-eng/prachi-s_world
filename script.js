// --- View Toggle Buttons ---
const cardBtn = document.getElementById("cardBtn");
if (cardBtn) {
  cardBtn.onclick = function () {
    document.body.classList.remove("list-view");
  };
}

const listBtn = document.getElementById("listBtn");
if (listBtn) {
  listBtn.onclick = function () {
    document.body.classList.add("list-view");
  };
}

// --- Song Data Array (Exact GitHub File Casing) ---
const songs = [
  { title: "Tu Hi Mera", file: "music/Tu_Hi_Mera.mp3", image: "image/photo1.jpg" },
  { title: "Dhokha Dhadi", file: "music/Dhokha_Dhadi.mp3", image: "image/photo2.jpg" },
  { title: "Shirt Da Button", file: "music/Shirt_Da_Button.mp3", image: "image/photo3.jpg" },
  { title: "Tu Hi Haqeeqat", file: "music/Tu_Hi_Haqeeqat.mp3", image: "image/photo4.jpg" },
  { title: "Maula Maula", file: "music/Maula_Maula__Re.mp3", image: "image/photo5.jpg" },
  { title: "Kinna Sona", file: "music/Kinna_Sona.mp3", image: "image/photo6.jpg" },
  { title: "Tera Fitoor", file: "music/Tera_Fitoor.mp3", image: "image/photo7.jpg" },
  { title: "Fakira", file: "music/Fakira.mp3", image: "image/photo8.jpg" },
  { title: "Qaafirana", file: "music/Qaafirana.mp3", image: "image/photo9.jpg" },
  { title: "Dekh Lena", file: "music/DEKH_LENA.mp3", image: "image/photo10.jpg" }
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

function highlightCard(index) {
  const cards = document.querySelectorAll(".song-card");
  cards.forEach((card) => card.classList.remove("active"));
  if (cards[index]) {
    cards[index].classList.add("active");
  }
}

function loadSong(index) {
  if (songs[index] && audio) {
    audio.src = songs[index].file;
    if (songTitle) songTitle.innerText = songs[index].title;
    if (songImage) songImage.src = songs[index].image;
    highlightCard(index);
  }
}

// Initial load
loadSong(currentSong);

// --- Controls ---
if (playBtn) {
  playBtn.onclick = function () {
    if (audio.paused) {
      audio.play();
      playBtn.innerText = "⏸";
    } else {
      audio.pause();
      playBtn.innerText = "▶";
    }
  };
}

if (nextBtn) {
  nextBtn.onclick = function () {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audio.play();
    if (playBtn) playBtn.innerText = "⏸";
  };
}

if (prevBtn) {
  prevBtn.onclick = function () {
    currentSong = (currentSong - 1 + songs.length) % songs.length;
    loadSong(currentSong);
    audio.play();
    if (playBtn) playBtn.innerText = "⏸";
  };
}

function playSong(index) {
  currentSong = index;
  loadSong(currentSong);
  audio.play();
  if (playBtn) playBtn.innerText = "⏸";
}

const mainPlayBtn = document.querySelector(".main-play");
if (mainPlayBtn) {
  mainPlayBtn.onclick = function () {
    currentSong = 0;
    loadSong(currentSong);
    audio.play();
    if (playBtn) playBtn.innerText = "⏸";
  };
}

// --- Progress Bar & Time Update ---
if (audio) {
  audio.addEventListener("timeupdate", function () {
    if (audio.duration) {
      if (progressBar) progressBar.value = (audio.currentTime / audio.duration) * 100;

      let currentMin = Math.floor(audio.currentTime / 60);
      let currentSec = Math.floor(audio.currentTime % 60);
      let totalMin = Math.floor(audio.duration / 60);
      let totalSec = Math.floor(audio.duration % 60);

      if (currentSec < 10) currentSec = "0" + currentSec;
      if (totalSec < 10) totalSec = "0" + totalSec;

      if (currentTimeText) currentTimeText.innerText = `${currentMin}:${currentSec}`;
      if (totalTimeText) totalTimeText.innerText = `${totalMin}:${totalSec}`;
    }
  });

  audio.addEventListener("ended", function () {
    currentSong = (currentSong + 1) % songs.length;
    loadSong(currentSong);
    audio.play();
  });
}

if (progressBar) {
  progressBar.addEventListener("input", function () {
    if (audio.duration) {
      audio.currentTime = (progressBar.value / 100) * audio.duration;
    }
  });
}

// --- Popups ---
function openPopup(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "block";
}

function closePopup(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = "none";
}

const secretBtn = document.getElementById("secretBtn");
if (secretBtn) {
  secretBtn.onclick = function () {
    const popup = document.getElementById("secretPopup");
    if (popup) popup.style.display = "flex";
  };
}

const closePopupBtn = document.getElementById("closePopup");
if (closePopupBtn) {
  closePopupBtn.onclick = function () {
    const popup = document.getElementById("secretPopup");
    if (popup) popup.style.display = "none";
  };
}

const meetBtn = document.getElementById("meetBtn");
if (meetBtn) {
  meetBtn.onclick = function () {
    openPopup("profilePopup");
  };
}

const aboutBtn = document.getElementById("aboutBtn");
if (aboutBtn) {
  aboutBtn.onclick = function () {
    openPopup("aboutSection");
  };
}

const playlistBtn = document.getElementById("playlistBtn");
if (playlistBtn) {
  playlistBtn.onclick = function () {
    const sec = document.getElementById("playlistSection");
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
  };
}

const supportBtn = document.getElementById("supportBtn");
if (supportBtn) {
  supportBtn.onclick = function () {
    window.open("https://www.instagram.com/prachiii__90", "_blank");
  };
}
