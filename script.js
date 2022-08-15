
// initilize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3'); 
let masterPlay  = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs=[
    {songName: 'Salam-e-ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: 'Salam-e-ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: 'Salam-e-ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: 'Salam-e-ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: 'Salam-e-ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: 'Salam-e-ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: 'Salam-e-ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: 'Salam-e-ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: 'Salam-e-ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName: 'Salam-e-ishq',filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
]

//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        document.getElementById("masterPlay").innerHTML ="pause";
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        document.getElementById("masterPlay").innerHTML ="play_arrow";
        gif.style.opacity=0;
    }
})
//audioElement.play()

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
console.log('timeupdate');
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})