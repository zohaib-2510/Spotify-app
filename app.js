console.log("WelCome To Spotify");
// var
let songIndex = 0;
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById("masterPlay")
let myProgressbar = document.getElementById("myProgressbar")


// var
let songs = [
{songName:"Karachi Chal",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"Karachi Chal",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"Karachi Chal",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"Karachi Chal",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"Karachi Chal",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
{songName:"Karachi Chal",filePath:"song/1.mp3",coverPath:"covers/1.jpg"}
]

// handel play pause click

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
audioElement.play();
    }
})


// listen to evenet
myProgressbar.addEventListener("timeupdate", ()=>{
console.log("time update");
})