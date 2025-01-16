document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.project-container, .quality-container'); // Select all relevant sections

    sections.forEach(section => {
        const projectGrid = section.querySelector('.slide'); // Get the corresponding slide container
        const leftButton = section.querySelector('.slider-button.left');
        const rightButton = section.querySelector('.slider-button.right');
        const scrollAmount = 400 // Adjust the scroll amount per click

        if (leftButton && rightButton && projectGrid) {
            leftButton.addEventListener('click', () => {
                projectGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            rightButton.addEventListener('click', () => {
                projectGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }
    });
});
