document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');

    function animateCounter(counter) {
        const target = +counter.getAttribute('data-target'); // Convert target to a number
        let speed = +counter.getAttribute('data-speed') || 100; // Default speed is 100 if not set

        // Scale speed dynamically for smaller target values
        if (target < 10) {
            speed = speed * 10000000; // Increase speed for small target values
        }

        function updateCounter() {
            const count = +counter.innerText; // Convert innerText to a number
            const increment = target / speed; // Calculate increment based on adjusted speed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment); // Increment the count
                setTimeout(updateCounter, 10); // Update after a small delay
            } else {
                counter.innerText = target; // Ensure it stops exactly at the target
            }
        }

        updateCounter(); // Start the animation for this counter
    }
    // Set up the Intersection Observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                animateCounter(counter); // Start the animation
                observer.unobserve(counter); // Stop observing once the animation starts
            }
        });
    }, observerOptions);

    // Observe each counter element
    counters.forEach(counter => observer.observe(counter));

    // Menu show/hide functionality
    const navlinks = document.getElementById("navlinks");

    function showmenu() {
        navlinks.style.right = "0";
    }

    function hidemenu() {
        navlinks.style.right = "-200px";
    }

    document.querySelector(".fa-bars").onclick = showmenu;
    document.querySelector(".fa-times").onclick = hidemenu;
});
