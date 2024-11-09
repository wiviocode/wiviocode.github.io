// Glitch button interaction
document.getElementById('glitch-button').addEventListener('click', function() {
  alert("The truth is out there... but are you ready?");
});

// Hidden link interaction
let videoLink = document.querySelector('.watch-video-link');
videoLink.addEventListener('mouseover', function() {
  videoLink.style.color = "#ff0000";
  videoLink.style.textShadow = "0px 0px 10px #ff0000";
});