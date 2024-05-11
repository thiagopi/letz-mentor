let current = "#screen-1";
let next = "";
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let video = document.getElementById("video");

document.addEventListener("DOMContentLoaded", function() {
    video = document.getElementById("video");
});

document.addEventListener("DOMContentLoaded", (event) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    gsap.to(["#screen-2", "#screen-3", "#screen-4"], { opacity: 0, x: -windowWidth, duration: 0 });
    gsap.to("#footer-2", { display: 'none', x: -windowWidth, duration: 0 });
});


function callMarcelo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    gsap.to("#screen-2", { opacity: 1, x: 0, duration: 0.5 });
    gsap.to(current, { opacity: 0, x: -windowWidth, duration: 0.5 });
    gsap.to("#footer-2", { opacity: 0, x: -windowWidth, duration: 0.5, onComplete: function() {
            gsap.to("#footer-2", { display: 'none' });
        } });
    current = "#screen-2";
}

function callVideo() {
    video.currentTime = 0;
    video.play();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    gsap.to("#screen-3", { opacity: 1, x: 0, duration: 0.5 });
    gsap.to("#footer-2", { display: 'grid', opacity: 1, x: 0, duration: 0.5 });
    gsap.to("#chat-input-2", { display: 'none', x: 0, duration: 0 });
    gsap.to("#chat-inner", { y: 0, duration: 0, delay: 0.5 });
    gsap.to("#button-keyboard", { display: 'grid', duration: 0 });
    gsap.to("#button-keyboard-down", { display: 'none', duration: 0 });
    gsap.to(current, { opacity: 0, x: -windowWidth, duration: 0.5 });
    current = "#screen-3";
}

function callChat() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    gsap.to("#screen-1", { opacity: 1, x: 0, duration: 0.5 });
    gsap.to(["#screen-2", "#screen-3", "#screen-4"], { opacity: 0, x: -windowWidth, duration: 0.5 });
    gsap.to(current, { opacity: 0, x: -windowWidth, duration: 0.5 });
    gsap.to("#footer-2", { opacity: 0, x: -windowWidth, duration: 0.5, onComplete: function() {
            gsap.to("#footer-2", { display: 'none' });
        } });
    gsap.to("#chat-inner", { y: 0, duration: 0, delay: 1 });
    current = "#screen-1";
}
