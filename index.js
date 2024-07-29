//discography.html
function toggleCard() {
    const card = document.querySelector('.card');
    card.classList.toggle('flip');
}
document.querySelectorAll('.playlist').forEach(item => {
item.addEventListener('click', () => {
const audioId = item.getAttribute('data-audio');
const audio = document.getElementById(audioId);
const icon = item.querySelector('i');
document.querySelectorAll('audio').forEach(el => {
    if (el !== audio) {
        el.pause();
        el.currentTime = 0;
    }
});
if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
    item.classList.add('active');
} else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
    item.classList.remove('active');
}
});
});


//index.html
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});

//nav:animation
document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.add('deactivating');
        setTimeout(() => {
            navLinks.classList.remove('active', 'deactivating');
            navLinks.style.display = 'none';
        }, 500); // Match the transition duration
    } else {
        navLinks.style.display = 'flex';
        setTimeout(() => {
            navLinks.classList.add('active');
        }, 0); // Delay to ensure the element is displayed before adding class
    }
});

//live.html
