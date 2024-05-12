let current = "#screen-1";
let next = "";
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let screen1 = document.getElementById("screen-1");
let screen2 = document.getElementById("screen-2");
let screen3 = document.getElementById("screen-3");
let screen4 = document.getElementById("screen-4");

let video = [];
let currentVideo = 0;

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    screen1.scrollTo({ top: 0, behavior: 'smooth' });
    screen2.scrollTo({ top: 0, behavior: 'smooth' });
    screen3.scrollTo({ top: 0, behavior: 'smooth' });
    screen4.scrollTo({ top: 0, behavior: 'smooth' });
}

function preloadVideo(url, id) {
    let req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.responseType = 'blob';
    req.onload = function() {
       if (this.status === 200) {
          var videoBlob = this.response;
          var vid = URL.createObjectURL(videoBlob);
          document.getElementById(id).src = vid;
       }
    }
    req.onerror = function() {
       // Error
    }
    req.send();	
}

document.addEventListener("DOMContentLoaded", function() {
	preloadVideo("assets/videos/video-demo-01.mp4","video1");
	preloadVideo("assets/videos/video-demo-02.mp4","video2");
	preloadVideo("assets/videos/video-demo-03.mp4","video3");
	preloadVideo("assets/videos/video-demo-04.mp4","video4");
	preloadVideo("assets/videos/video-demo-05.mp4","video5");
    screen1 = document.getElementById("screen-1");
    screen2 = document.getElementById("screen-2");
    screen3 = document.getElementById("screen-3");
    screen4 = document.getElementById("screen-4");
    scrollTop();
    gsap.to(["#screen-2", "#screen-3", "#screen-4"], { opacity: 0, x: -windowWidth, duration: 0 });
});

function callMarcelo() {
    video = [
		document.getElementById("video1"),
		document.getElementById("video2"),
		document.getElementById("video3"),
		document.getElementById("video4"),
		document.getElementById("video5")
	];
	stopVideo();
	resetVideoControls();
	scrollTop();
    gsap.to("#header", { opacity: 1, y: 0, duration: 0.5 });
    gsap.to("#logo", { opacity: 0, duration: 0.5 });
    gsap.to("#avatar", { opacity: 0, duration: 0.5 });
    gsap.to("#screen-2", { opacity: 1, x: 0, duration: 0.5 });
    gsap.to(current, { opacity: 0, x: -windowWidth, duration: 0.5 });
    current = "#screen-2";
}

function callVideo() {
	stopVideo();
	currentVideo = 0;
    video[currentVideo].currentTime = 0;
	video[currentVideo].style.display = "block";
	for(let i=0; i<video.length; i++){
		if(i!=currentVideo){
            video[i].currentTime = 0;
            video[i].play();
			video[i].pause();
            video[i].style.display = "none";			
		}
	}
	video[currentVideo].play();
	video[currentVideo].pause();
    scrollTop();
    gsap.to("#logo", { opacity: 0, duration: 0.5 });
    gsap.to("#avatar", { opacity: 0, duration: 0.5 });
    gsap.to("#header", { opacity: 0, y: -100, duration: 0.5 });
    gsap.to("#screen-3", { opacity: 1, x: 0, duration: 0.5 });
    gsap.to("#chat-input-2", { display: 'none', x: 0, duration: 0 });
    gsap.to("#chat-inner", { y: 0, duration: 0, delay: 0.5 });
    gsap.to("#button-keyboard", { display: 'grid', duration: 0 });
    gsap.to("#button-keyboard-down", { display: 'none', duration: 0 });
    gsap.to(current, { opacity: 0, x: -windowWidth, duration: 0.5 });
    current = "#screen-3";
}

function talk() {
	stopVideo();
	document.getElementById("videoControls").style.backgroundColor="#EEEEEE";
}
							
function resetVideoControls() {
	document.getElementById("videoControls").style.backgroundColor="#FFFFFF";
}							

function stopVideo() {
	resetVideoControls();
	for(let i=0; i<video.length; i++){
		video[i].pause();
	}
}

function nextVideo() {
    resetVideoControls();	
    video[currentVideo].style.display = "block";
    video[currentVideo].currentTime = 0;
    video[currentVideo].pause();
    video[currentVideo].play();
    for(let i=0; i<video.length; i++){
        if(i!=currentVideo){
            video[i].pause();
            video[i].currentTime = 0;
            video[i].style.display = "none";			
        }
    }
    currentVideo++;
    if(currentVideo > video.length - 1) {
        currentVideo = 0;
    }
	preloadVideo(video[currentVideo].src,video[currentVideo].id);
}
		
function pauseVideo() {
	// video[currentVideo].pause();
}

function callChat() {
	stopVideo();
	scrollTop();
    gsap.to("#header", { opacity: 1, y: 0, duration: 0.5 });
    gsap.to("#logo", { opacity: 0, duration: 0.5 });
    gsap.to("#avatar", { opacity: 0, duration: 0.5 });
    gsap.to("#screen-4", { opacity: 1, x: 0, duration: 0.5 });
    gsap.to("#footer-2", { display: 'grid', opacity: 1, x: 0, duration: 0.5 });
    gsap.to("#chat-input-2", { display: 'flex', x: 0, duration: 0 });
    gsap.to("#chat-inner", { y: -70, duration: 2 });
    gsap.to("#button-keyboard", { display: 'none', duration: 0 });
    gsap.to("#button-keyboard-down", { display: 'grid', duration: 0 });
    gsap.to(current, { opacity: 0, x: -windowWidth, duration: 0.5 });
    current = "#screen-4";
}

function goHome() {
	onChat = false;
	stopVideo();
    scrollTop();
    gsap.to("#header", { opacity: 1, y: 0, duration: 0.5 });
    gsap.to("#logo", { opacity: 1, duration: 0.5 });
    gsap.to("#avatar", { opacity: 1, duration: 0.5 });
    gsap.to("#screen-1", { opacity: 1, x: 0, duration: 0.5 });
    gsap.to(["#screen-2", "#screen-3", "#screen-4"], { opacity: 0, x: -windowWidth, duration: 0.5 });
    gsap.to("#chat-inner", { y: 0, duration: 0, delay: 1 });
    current = "#screen-1";
}
