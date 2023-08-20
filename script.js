let songindex=0;
let audio=new Audio('images/songs/1.mp3');
let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById('myprogressbar');
let mastersongname=document.getElementById('mastersongname');
let gif=document.getElementById('gif');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songitemplay=Array.from(document.getElementsByClassName('songitemplay'));


let songs=[
    {songname:"Heeriye", filePath: "images/songs/1.mp3", coverpath:"images/covers/1.jpg" },
    {songname:"Janiye", filePath: "images/songs/2.mp3", coverpath:"images/covers/2.jpg" },
    {songname:"Mahiye-Jinaa-sona", filePath: "images/songs/3.mp3", coverpath:"images/covers/3.jpg" },
    {songname:"Mitti Di Khusboo", filePath: "images/songs/4.mp3", coverpath:"images/covers/4.jpg" },
    {songname:"obssesed", filePath: "images/songs/5.mp3", coverpath:"images/covers/5.jpg" },
    {songname:"Phir Aur Kya Chahiye", filePath: "images/songs/6.mp3", coverpath:"images/covers/6.jpg" },
    {songname:"Still Rollin", filePath: "images/songs/7.mp3", coverpath:"images/covers/7.jpg" },
    {songname:"Tere Bin", filePath: "images/songs/8.mp3", coverpath:"images/covers/8.jpg" },
    {songname:"Tere Hawale", filePath: "images/songs/9.mp3", coverpath:"images/covers/9.jpg" }
]
songitem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
    
});

//audio.play();
//handle play pause click
masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0){
        audio.play(); 
        masterplay.classList.remove( 'fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }else{
        audio.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        
        gif.style.opacity=0;
        
    }

})
//listen events
audio.addEventListener('timeupdate',()=>{
    
    //update seekbar
    progress=parseInt((audio.currentTime/audio.duration)*100);
   
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    
    //update seekbar
    audio.currentTime=myprogressbar.value * audio.duration/100;
   
    
})
const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
})
}

// Array.from(document.getElementsByClassName('songitemplay')).forEach(function (element){
   
//     element.addEventListener('click', (e) => {
//         makeAllplays();
//         songindex=parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audio.src = songs[songindex].filePath;
//         mastersongname.innerText=songs[songindex].songname;

//         audio.currentTime=0;
//         audio.play();
//         gif.style.opacity=1;
//         masterplay.classList.remove( 'fa-circle-play');
//         masterplay.classList.add('fa-circle-pause');
//     });
// }) 

Array.from(document.getElementsByClassName('songitemplay')).forEach(function (element) {
    element.addEventListener('click', (e) => {
        if (audio.paused || audio.currentTime <= 0 || songindex !== parseInt(e.target.id)) {
            makeAllplays();
            songindex = parseInt(e.target.id); // Update the selected song index
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audio.src = songs[songindex].filePath; // Set the correct audio source
            mastersongname.innerText = songs[songindex].songname; // Update the song name
            audio.currentTime = 0;
            audio.play();
            gif.style.opacity = 1;
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
        } else {
            audio.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            gif.style.opacity = 0;
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
        }
    });
});

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }else{
        songindex += 1;
    }
    audio.src = songs[songindex].filePath;
    mastersongname.innerText=songs[songindex].songname;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=1;
    masterplay.classList.remove( 'fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }else{
        songindex -= 1;
    }
    audio.src = songs[songindex].filePath;
    mastersongname.innerText=songs[songindex].songname;
    audio.currentTime=0;
    audio.play();
    gif.style.opacity=1;
    masterplay.classList.remove( 'fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
