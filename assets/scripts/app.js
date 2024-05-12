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
let onChat = false;

function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    screen1.scrollTo({ top: 0, behavior: 'smooth' });
    screen2.scrollTo({ top: 0, behavior: 'smooth' });
    screen3.scrollTo({ top: 0, behavior: 'smooth' });
    screen4.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
    video = [
		document.getElementById("video1"),
		document.getElementById("video2"),
		document.getElementById("video3"),
		document.getElementById("video4"),
		document.getElementById("video5")
	];
	for(let i = 1; i < video.length; i++){
		video[i].style.display = "none";
	}
    screen1 = document.getElementById("screen-1");
    screen2 = document.getElementById("screen-2");
    screen3 = document.getElementById("screen-3");
    screen4 = document.getElementById("screen-4");
	onChat = false;
});

document.addEventListener("DOMContentLoaded", (event) => {
    scrollTop();
    gsap.to(["#screen-2", "#screen-3", "#screen-4"], { opacity: 0, x: -windowWidth, duration: 0 });
});

function callMarcelo() {
	onChat = false;
	stopVideo();
	scrollTop();
	resetVideoControls();
    gsap.to("#header", { opacity: 1, y: 0, duration: 0.5 });
    gsap.to("#logo", { opacity: 0, duration: 0.5 });
    gsap.to("#avatar", { opacity: 0, duration: 0.5 });
    gsap.to("#screen-2", { opacity: 1, x: 0, duration: 0.5 });
    gsap.to(current, { opacity: 0, x: -windowWidth, duration: 0.5 });
    current = "#screen-2";
}

function callVideo() {
	onChat = true;
	stopVideo();
	currentVideo = video.length - 1;
    video[currentVideo].currentTime = 0;
	video[0].style.display = "block";
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
	video[currentVideo].pause();
	video[currentVideo].currentTime = 0;
	for(let i = 1; i < video.length; i++){
		video[i].style.display = "none";
	}	
}

function nextVideo() {
	resetVideoControls();
	if(!onChat){
		stopVideo();
		currentVideo = video.length - 1;
		return;
	}
	video[currentVideo].style.display = "none";	
	currentVideo++;
	if(currentVideo > video.length - 1){
		currentVideo = 0;
	}
	video[currentVideo].style.display = "block";
	video[currentVideo].currentTime = 0;		
	video[currentVideo].play();
}
		
function callChat() {
	onChat = false;
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
