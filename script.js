const btn = document.getElementById('generate-btn');

btn.addEventListener('click', function() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    btn.innerHTML=randomColor;
    document.body.style.backgroundColor = randomColor;

    // List of random images
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg'
    ];

    // Select a random image
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.getElementById('random-image').src = randomImage;
});
