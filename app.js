const song = document.querySelector('.current-song'); //audio element for current song
const allSongs = document.querySelector('.song-picker'); //all possible songs
const currentSongName = document.querySelector('.song-name'); //name of current song
const currentImg = document.querySelector('.album-cover img'); //current album cover
allSongs.addEventListener('click', e => {
    if(e.target.className === 'song') { //only works if you click on a song button
        song.src = e.target.getAttribute('data-song'); //sets the current song source to the sourcee of whatever you clicked
        currentSongName.textContent = e.target.getAttribute('data-name'); //sets the name of current song to whatever you clicked
        currentImg.setAttribute('src', e.target.getAttribute('data-img')); //sets the album cover
        checkPlaying(song); //plays on click
    }
})

const playPause = document.querySelector('.play-pause1');
playPause.addEventListener('click', () => {
    checkPlaying(song);
});

const checkPlaying = song => {
    if(song.paused) {
        song.play();
        playPause.textContent = 'pause';
        //play.src = './svg/pause.svg'; //changes the play icon to pause icon
    } else {
        song.pause();
        playPause.textContent = 'play';
        //play.src = './svg/play.svg';
    }
};
const allRows = document.querySelectorAll('tr:nth-child(n+2)'); //selects all rows except for the first one (title/artist/album)

allRows.forEach(row => {
    const btn = row.querySelector('.fa-play-circle');
    row.addEventListener('mouseover', e => {
        btn.setAttribute('style', 'visibility: visible');
    });
    row.addEventListener('mouseout', e=> {
        btn.setAttribute('style', 'visibility: hidden');
    });
})