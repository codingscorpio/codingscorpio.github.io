let songList = document.querySelector('#song-list');
let songs = [
    {
        name : 'Tere Hawaale',
        id : 1
    },
    {
        name: 'Maan Meri Jaan',
        id: 2
    },
    {
        name: 'Heeriye',
        id : 3
    },
    {
        name: 'Chaleya',
        id : 4
    },
    {
        name: 'O Mahi O Mahi',
        id : 5
    }
];

let audio = new Audio('./Asset/MP3/song1.mp3');
for(let song of songs){
    let li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id', song.id);
    li.classList.add('song-list');
    songList.append(li);
}

let playBtn = document.querySelector('#play-btn')
playBtn.addEventListener('click', ()=>{
    audio.paused ? audio.play() : audio.pause();

    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play');
        playBtn.children[0].classList.add('fa-pause');
    }
    else{
        playBtn.children[0].classList.remove('fa-pause');
        playBtn.children[0].classList.add('fa-play');
    }
})

let progressbar = document.querySelector('#progress');
audio.addEventListener('timeupdate', ()=>{
    let currentProgress = audio.currentTime * 100 /audio.duration;
    progressbar.value = currentProgress;
})
progressbar.addEventListener('change', ()=>{
    let updatedTime = audio.duration * progressbar.value / 100;
    audio.currentTime = updatedTime;
})

let backgroundImg = document.querySelector('img');
backgroundImg.setAttribute('src', './Asset/Images/img1.jpg');

songList.addEventListener('click', (e)=>{
    let songID = e.target.getAttribute('id');
    audio.src = `./Asset/MP3/song${songID}.mp3`
    let songImg = `./Asset/Images/img${songID}.jpg`;
    backgroundImg.setAttribute('src',songImg);
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');
})

