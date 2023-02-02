console.log('welcome to Amusic');

//Initialize the Variables
let songIndex=0;
let audioElement= new Audio('music/1.mp3');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterPlay=document.getElementById('masterPlay');
let coverImage = document.getElementById("coverImage");

let songs=[
    {songName: "Varsha Roopam ",filePath:"music/1.mp3",coverPath:"images/cover1.jpg"},
    {songName: " Deva Deva",filePath:"music/2.mp3",coverPath:"images/cover2.jpg"},
    {songName: "Sunshine",filePath:"music/3.mp3",coverPath:"images/cover3.jpg"},
    {songName: "Jhoome Jo",filePath:"music/4.mp3",coverPath:"images/cover4.jpg"},
    {songName: "Rasiya",filePath:"music/5.mp3",coverPath:"images/cover5.jpg"},
    {songName: "Maan Meri",filePath:"music/8.mp3",coverPath:"images/cover6.jpg"},
    {songName: "Naatu Naatu",filePath:"music/9.mp3",coverPath:"images/cover7.jpg"},
    {songName: "Monster Song",filePath:"music/13.mp3",coverPath:"images/cover8.jpg"},
    {songName: "Kesariya",filePath:"music/7.mp3",coverPath:"images/cover9.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


//Handle Play , Pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        coverImage.style = "animation: discRotate ease-in-out 10s infinite;"
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        coverImage.style = "";
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    //Update the SeekBar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    
})

const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        songIndex=parseInt(e.target.id);
        //console.log(e.target.id); 
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`music/${songIndex+1}.mp3`;
        coverImage.src = `images/cover${songIndex+1}.jpg`;
        coverImage.style = "animation: discRotate ease-in-out 10s infinite;"
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
    
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=8){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
        audioElement.src=`music/${songIndex+1}.mp3`;
        coverImage.src = `images/cover${songIndex+1}.jpg`;
        coverImage.style = "animation: discRotate ease-in-out 10s infinite;"
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
        audioElement.src=`music/${songIndex+1}.mp3`;
        coverImage.src = `images/cover${songIndex+1}.jpg`;
        coverImage.style = "animation: discRotate ease-in-out 10s infinite;"
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})





