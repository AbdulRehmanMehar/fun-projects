setTimeout(() => {
var audio = new Audio(),
    i = 0;
var playlist = new Array('http://www.w3schools.com/htmL/horse.mp3', "https://2u039f-a.akamaihd.net/downloads/ringtones/files/dl/mp3/funny-hen-13019.mp3", "https://instrumentalfx.co/wp-content/upload/11/The-Pink-Panther-Theme-Song.mp3", "https://www.redringtones.com/wp-content/uploads/2017/02/oggy-and-the-cockroaches-theme-song.mp3");

audio.addEventListener('ended', function () {
    if (i==playlist.length) i = 0;
    i = ++i < playlist.length ? i : 0;
    console.log(i)
    audio.src = playlist[i];
    audio.play();
}, true);
audio.src = playlist[0];
audio.play();
}, 60000)
