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

        var currentLocation = window.location.pathname;
        var navLinks = document.querySelectorAll('header nav a');

        // Remove active class from all links first
        navLinks.forEach(function(link) {
            link.classList.remove('active-page');
        });

        navLinks.forEach(function(link) {
            if (currentLocation.endsWith('/') && link.href.endsWith('index.html')) {
                // Highlight the Home link when on root URL
                link.classList.remove('active-page');
            } else if (link.href.includes(currentLocation)) {
                // Highlight link that matches the current URL
                link.classList.add('active-page');
            }
        });
    });
});
