document.getElementById("cardBtn").onclick = function(){
    document.body.classList.remove("list-view");
};

document.getElementById("listBtn").onclick = function(){
    document.body.classList.add("list-view");
};

const songs = [
{
title:"Tu Hi Mera",
file:"music/tu_hi_mera.mp3",
image:"image/photo1.jpg"
},
{
title:"Dhokha Dhadi",
file:"music/dhokha_dhadi.mp3",
image:"image/photo2.jpg"
},
{
title:"Shirt Da Button",
file:"music/shirt_da_button.mp3",
image:"image/photo3.jpg"
},
{
title:"Tu Hi Haqeeqat",
file:"music/tu_hi_haqeeqat.mp3",
image:"image/photo4.jpg"
},
{
title:"Maula Maula",
file:"music/Maula_Maula__Re.mp3",
image:"image/photo5.jpg"
},
{
title:"Kinna Sona",
file:"music/kinna_sona.mp3",
image:"image/photo6.jpg"
},
{
title:"Tera Fitoor",
file:"music/tera_fitoor.mp3",
image:"image/photo7.jpg"
},
{
title:"Fakira",
file:"music/fakira.mp3",
image:"image/photo8.jpg"
},
{
title:"Qaafirana",
file:"music/qaafirana.mp3",
image:"image/photo9.jpg"
},
{
title:"Dekh Lena",
file:"music/dekh_lena.mp3",
image:"image/photo10.jpg"
}
];

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

function highlightCard(index){

    document.querySelectorAll(".song-card")
    .forEach(card => card.classList.remove("active"));

    document.querySelectorAll(".song-card")[index]
    .classList.add("active");
}

function loadSong(index){

    audio.src = songs[index].file;
    songTitle.innerText = songs[index].title;
    songImage.src = songs[index].image;

    highlightCard(index);
}

loadSong(currentSong);

playBtn.onclick = function(){

    if(audio.paused){

        audio.play();
        playBtn.innerText = "⏸";

    }else{

        audio.pause();
        playBtn.innerText = "▶";

    }
};

nextBtn.onclick = function(){

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();

    playBtn.innerText = "⏸";
};

prevBtn.onclick = function(){

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();

    playBtn.innerText = "⏸";
};

function playSong(index){

    currentSong = index;

    loadSong(currentSong);

    audio.play();

    playBtn.innerText = "⏸";
}

audio.addEventListener("timeupdate", function(){

    if(audio.duration){

        progressBar.value =
        (audio.currentTime / audio.duration) * 100;

        let currentMin =
        Math.floor(audio.currentTime / 60);

        let currentSec =
        Math.floor(audio.currentTime % 60);

        let totalMin =
        Math.floor(audio.duration / 60);

        let totalSec =
        Math.floor(audio.duration % 60);

        if(currentSec < 10){
            currentSec = "0" + currentSec;
        }

        if(totalSec < 10){
            totalSec = "0" + totalSec;
        }

        currentTimeText.innerText =
        currentMin + ":" + currentSec;

        totalTimeText.innerText =
        totalMin + ":" + totalSec;
    }
});

progressBar.addEventListener("input", function(){

    if(audio.duration){

        audio.currentTime =
        (progressBar.value / 100) * audio.duration;
    }
});

document.querySelector(".main-play").onclick = function(){

    currentSong = 0;

    loadSong(currentSong);

    audio.play();

    playBtn.innerText = "⏸";
};

audio.addEventListener("ended", function(){

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();
});

document.getElementById("secretBtn").onclick = function(){

    document.getElementById("secretPopup")
    .style.display = "flex";

};

document.getElementById("closePopup")
.onclick = function(){

    document.getElementById("secretPopup")
    .style.display = "none";

};
function openPopup(id){
document.getElementById(id).style.display = "block";
}

function closePopup(id){
document.getElementById(id).style.display = "none";
}function openPopup(id){
document.getElementById(id).style.display="block";
}

function closePopup(id){
document.getElementById(id).style.display="none";
}document.getElementById("meetBtn").onclick = function(){
    document.getElementById("profilePopup").style.display = "block";
};

document.getElementById("aboutBtn").onclick = function(){
    document.getElementById("aboutSection").style.display = "block";
};

document.getElementById("playlistBtn").onclick = function(){
    document.getElementById("playlistSection")
    .scrollIntoView({behavior:"smooth"});
};

document.getElementById("supportBtn").onclick = function(){
    window.open(
    "https://www.instagram.com/prachiii__90?igsh=MTdiNWtsYXJmdzhheg==",
    "_blank"
    );
};
