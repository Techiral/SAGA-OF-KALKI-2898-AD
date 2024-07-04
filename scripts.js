document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');

    ctaButton.addEventListener('mouseover', () => {
        const audio = new Audio('hover-sound.mp3');
        audio.play();
    });
});
