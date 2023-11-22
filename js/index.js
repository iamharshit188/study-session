let currentBackgroundIndex = 0;

const backgrounds = [
    'url(\'../assets/wall1.jpg\')',
    'url(\'../assets/wall2.jpg\')',
    'url(\'../assets/wall3.jpg\')',
    'url(\'../assets/wall4.jpg\')',
    'url(\'../assets/wall5.jpg\')',
    'url(\'../assets/wall6.jpg\')',
    'url(\'../assets/wall7.jpg\')',
    'url(\'../assets/wall8.jpg\')',
    'url(\'../assets/wall9.jpg\')'
];

function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = backgrounds[currentBackgroundIndex];
}