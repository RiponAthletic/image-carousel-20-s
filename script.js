let currentIndex = 0;
const images = document.querySelectorAll('.carousel-slide img');
const totalImages = images.length;

function changeImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(changeImage, 3000); // Change image every 3 seconds
