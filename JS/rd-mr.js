document.addEventListener('DOMContentLoaded', () => {
    const parentContainers = document.querySelectorAll('.info');

    parentContainers.forEach((parentContainer) => {
        parentContainer.addEventListener('click', (event) => {
            const current = event.target;

            // Check if the clicked element is a "Read More" button
            if (!current.classList.contains('toggle-btn')) return;

            // Get the corresponding `.more-info` element within the same `.team-card`
            const currentText = current.parentNode.querySelector('.more-info');

            if (currentText) {
                currentText.classList.toggle('more-info--show');
                current.textContent = current.textContent.includes('Read More')
                    ? 'Read Less...'
                    : 'Read More...';
            }
        });
    });
});

