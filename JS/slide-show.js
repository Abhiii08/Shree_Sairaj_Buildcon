document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("imageSlider");
    const slides = slider.children;
    let index = 0;

    const slideInterval = setInterval(() => {
        index = (index + 1) % slides.length; // Cycle through slides
        const offset = index * slider.offsetWidth; // Calculate the scroll position
        slider.scrollTo({
            left: offset,
            behavior: "smooth"
        });
    }, 3000); // Change slide every 3 seconds
});
