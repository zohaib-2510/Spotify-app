console.log("WelCome To Spotify");
let songIndex = 0;
let audioElement = new Audio('1.mp3')
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressbar");
let songItems = Array.from(document.getElementsByClassName("songItem"))
let gif = document.querySelector("#gif")
let songs = [
    {songName:"Karachi Mera",filePath:"1.mp3",coverPath:".jpg"},
    {songName:"Karachi Chal",filePath:"2.mp3",coverPath:"2.jpg"},
    {songName:"Love Naventi",filePath:"3.mp3",coverPath:"3.jpg"},
    {songName:"True love",filePath:"4.mp3",coverPath:"4.jpg"},
    {songName:"Mountains",filePath:"5.mp3",coverPath:"5.jpg"},
    {songName:"Divine",filePath:"6.mp3",coverPath:"6.jpg"},
    {songName:"Cold Hour",filePath:"7.mp3",coverPath:"7.jpg"},
    {songName:"Shubh",filePath:"8.mp3",coverPath:"8.jpg"},
    {songName:"We Rollin",filePath:"9.mp3",coverPath:"9.jpg"},
    {songName:"No Love",filePath:"10.mp3",coverPath:"10.jpg"}
]
songItems.forEach((element,i)=>{

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
})

audioElement.addEventListener("timeupdate",()=>{
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = Progress;
})


masterPlay.addEventListener("click",()=>{

 if(audioElement.paused ||audioElement.currentTime<=0){
   audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity=0;
}
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;

})
const makeAllPlays = ()=>{
    Array.from (document.getElementById("songItemPlay")).forEach((element)=>{
      element.classList.remove('fa-pause-circle')
      element.classList.add('fa-play-circle')
        })
}

Array.from (document.getElementById("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
makeAllPlays();
e.target.classList.remove('fa-play-circle')
e.target.classList.add("fa-pause-circle")
    })
})














































