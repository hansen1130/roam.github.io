
    document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll(".roam-container1-img img");
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }
        images[currentIndex].classList.add("active");
        setInterval(showNextImage, 3000);
    });

    document.addEventListener("DOMContentLoaded", function() {
        const popupCards = document.querySelectorAll(".roam-page3-travel-card");
        const popups = document.querySelectorAll(".roam-popup1");
        let currentInterval = null;
        let currentPopup = null;

        function openPopup(popupId) {

            closePopups();

            const targetPopup = document.getElementById(popupId);
            targetPopup.classList.remove("hidden1");
            currentPopup = targetPopup;

            startSlideshow(targetPopup.querySelector(".roam-popup1-image"));
        }

        function closePopups() {
            if (currentPopup) {
                currentPopup.classList.add("hidden1");
                stopSlideshow();
                currentPopup = null;
            }
        }

        function startSlideshow(container) {
            stopSlideshow();
            const images = container.querySelectorAll("img");
            let currentIndex = 0;

            images.forEach((img) => img.classList.remove("active"));
            images[0].classList.add("active");

            function showNextImage() {
                images[currentIndex].classList.remove("active");
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add("active");
            }

            currentInterval = setInterval(showNextImage, 3000);
        }

        function stopSlideshow() {
            if (currentInterval) {
                clearInterval(currentInterval);
                currentInterval = null;
            }
        }

        popupCards.forEach((card) => {
            card.addEventListener("click", () => {
                const popupId = card.getAttribute("data-popup");
                openPopup(popupId);
            });
        });

        popups.forEach((popup) => {
            const closeButton = popup.querySelector(".roam-popup1-close");
            closeButton.addEventListener("click", closePopups);

            const prevButton = popup.querySelector(".roam-popup-prev");
            const nextButton = popup.querySelector(".roam-popup-next");

            prevButton?.addEventListener("click", () => {
                const currentId = parseInt(popup.id.split("-").pop(), 10);
                const prevId = currentId > 1 ? `roam-popup-${currentId - 1}` : `roam-popup-${popups.length}`;
                openPopup(prevId);
            });

            nextButton?.addEventListener("click", () => {
                const currentId = parseInt(popup.id.split("-").pop(), 10);
                const nextId = currentId < popups.length ? `roam-popup-${currentId + 1}` : `roam-popup-1`;
                openPopup(nextId);
            });
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
    const popupCards = document.querySelectorAll(".roam-page3-travel-card");
    const popups = document.querySelectorAll(".roam-popup1");
    let currentInterval = null;
    let currentPopup = null;

    function openPopup(popupId) {
        closePopups();

        const targetPopup = document.getElementById(popupId);
        targetPopup.classList.remove("hidden1");
        currentPopup = targetPopup;

        document.body.style.overflow = "hidden";

        startSlideshow(targetPopup.querySelector(".roam-popup1-image"));
    }

    function closePopups() {
        if (currentPopup) {
            currentPopup.classList.add("hidden1");
            stopSlideshow();
            currentPopup = null;

            document.body.style.overflow = "";
        }
    }

    function startSlideshow(container) {
        stopSlideshow(); 
        const images = container.querySelectorAll("img");
        let currentIndex = 0;

        images.forEach((img) => img.classList.remove("active"));
        images[0].classList.add("active");

        function showNextImage() {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }

        currentInterval = setInterval(showNextImage, 3000);
    }

    function stopSlideshow() {
        if (currentInterval) {
            clearInterval(currentInterval);
            currentInterval = null;
        }
    }

    popupCards.forEach((card) => {
        card.addEventListener("click", () => {
            const popupId = card.getAttribute("data-popup");
            openPopup(popupId);
        });
    });

    popups.forEach((popup) => {
        const closeButton = popup.querySelector(".roam-popup1-close");
        closeButton.addEventListener("click", closePopups);

        const prevButton = popup.querySelector(".roam-popup-prev");
        const nextButton = popup.querySelector(".roam-popup-next");

        prevButton?.addEventListener("click", () => {
            const currentId = parseInt(popup.id.split("-").pop(), 10);
            const prevId = currentId > 1 ? `roam-popup-${currentId - 1}` : `roam-popup-${popups.length}`;
            openPopup(prevId);
        });

        nextButton?.addEventListener("click", () => {
            const currentId = parseInt(popup.id.split("-").pop(), 10);
            const nextId = currentId < popups.length ? `roam-popup-${currentId + 1}` : `roam-popup-1`;
            openPopup(nextId);
        });

        popup.addEventListener("click", (event) => {
            if (event.target === popup) {
                closePopups();
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
});