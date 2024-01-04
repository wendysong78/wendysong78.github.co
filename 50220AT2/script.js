$(document).ready(function() {
    // Load the header
    $("#header-placeholder").load("header.html", function() {
        // Event delegation for hamburger menu click
        document.body.addEventListener('click', function(event) {
            if (event.target.matches('.hamburger-menu')) {
                // Toggle the navigation menu
                const nav = document.querySelector('header nav');
                nav.classList.toggle('nav-active');
            }

            // Close the menu if clicking outside the header and nav is active
            if (!event.target.closest('header')) {
                const nav = document.querySelector('header nav');
                if (nav && nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                }
            }
        });

        // Highlight the active page in the navigation
        var currentLocation = window.location.href.split('/').pop(); // Get the last segment of the URL
        var navLinks = document.querySelectorAll('header nav a');

        navLinks.forEach(function(link) {
            if (link.getAttribute('href').endsWith(currentLocation)) {
                link.classList.add('active-page');
            } else {
                link.classList.remove('active-page'); // Ensure only the correct link is highlighted
            }
        });
    });
});
