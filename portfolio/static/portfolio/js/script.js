document.addEventListener("DOMContentLoaded", function () {

    /*
    =========================================================
    PAGE FADE-IN
    =========================================================
    */

    document.body.classList.add("page-loaded");


    /*
    =========================================================
    PAGE FADE-OUT ON NAVIGATION
    =========================================================
    */

    const navigationLinks = document.querySelectorAll(".nav-link");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            // Ignore Ctrl + Click, Cmd + Click, Shift + Click, etc.
            if (
                event.ctrlKey ||
                event.metaKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            // Ignore links opening in a new tab
            if (this.target === "_blank") {
                return;
            }

            const targetUrl = this.href;

            if (!targetUrl) {
                return;
            }

            const currentUrl = new URL(
                window.location.href
            );

            const target = new URL(
                targetUrl,
                window.location.origin
            );

            // If already on the same page, do nothing
            if (
                currentUrl.pathname === target.pathname &&
                currentUrl.search === target.search
            ) {
                event.preventDefault();
                return;
            }

            event.preventDefault();

            /*
            Add fade-out class
            */
            document.body.classList.add("page-exit");

            /*
            Wait for animation, then navigate
            */
            setTimeout(function () {
                window.location.href = target.href;
            }, 350);

        });

    });


    /*
    =========================================================
    ACTIVE NAVIGATION
    =========================================================
    */

    const currentPath = window.location.pathname;

    navigationLinks.forEach(function (link) {

        const linkUrl = new URL(
            link.href,
            window.location.origin
        );

        link.classList.remove("active");

        if (currentPath === linkUrl.pathname) {
            link.classList.add("active");
        }

    });

});
