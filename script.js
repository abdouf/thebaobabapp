// Image rotation functionality
const images = document.querySelectorAll('.hero-image');
let currentImageIndex = 0;

function changeImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

// Initial setup
images[currentImageIndex].classList.add('active');
setInterval(changeImage, 3000); // Change image every 3 seconds

// Smooth scroll functionality
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function openModal(videoSrc, title) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalSource = document.getElementById('modalSource');
    const modalTitle = document.getElementById('modalTitle');

    modalTitle.innerText = title;
    modalSource.src = videoSrc;
    modalVideo.load();
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');

    modalVideo.pause();
    modal.style.display = 'none';
}

function openModal(imageSrc, title) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('videoModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('videoModal').style.display = 'none';
}
