
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

document.getElementById('roam-lang-zh').addEventListener('click', () => {
    document.querySelectorAll('.lang.zh').forEach(el => el.style.display = '');
    document.querySelectorAll('.lang.en').forEach(el => el.style.display = 'none');
    document.getElementById('roam-lang-zh').classList.add('active');
    document.getElementById('roam-lang-en').classList.remove('active');
});

document.getElementById('roam-lang-en').addEventListener('click', () => {
    document.querySelectorAll('.lang.zh').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.lang.en').forEach(el => el.style.display = '');
    document.getElementById('roam-lang-en').classList.add('active');
    document.getElementById('roam-lang-zh').classList.remove('active');
});

const langData = {
    zh: {
        title: "Point Out! 指向新北無限新北",
        description: "探索新北文化之美，體驗多元新北故事，發現城市中的驚喜旅程。",
        keywords: "新北旅遊, 新北文化, 景點推薦, 新北無限新北, 指向新北",
        author: "新北市政府"
    },
    en: {
        title: "Point Out! Explore Infinite New Taipei",
        description: "Discover the beauty of New Taipei's culture, experience diverse stories, and uncover the city's hidden gems.",
        keywords: "New Taipei travel, New Taipei culture, attractions, infinite New Taipei, Point Out",
        author: "New Taipei Government"
    }
};

document.getElementById('roam-lang-zh').addEventListener('click', () => {
    switchLanguage('zh');
});
document.getElementById('roam-lang-en').addEventListener('click', () => {
    switchLanguage('en');
});

function switchLanguage(lang) {
    document.getElementById('page-title').innerText = langData[lang].title;
    document.getElementById('meta-description').setAttribute('content', langData[lang].description);
    document.getElementById('meta-keywords').setAttribute('content', langData[lang].keywords);
    document.getElementById('meta-author').setAttribute('content', langData[lang].author);

    if (lang === 'zh') {
        document.getElementById('roam-lang-zh').classList.add('active');
        document.getElementById('roam-lang-en').classList.remove('active');
    } else {
        document.getElementById('roam-lang-en').classList.add('active');
        document.getElementById('roam-lang-zh').classList.remove('active');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    document.querySelectorAll('.roam-library-content a').forEach(link => {
        const activityDate = new Date(link.getAttribute('data-date'));
        if (activityDate < today) {
            link.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("roam-popup-event").style.display = "block";
    }, 100); 
});

function closeRoamPopupEvent() {
    document.getElementById("roam-popup-event").style.display = "none";
}

document.getElementById("roam-popup-event").addEventListener("click", function (event) {
    if (event.target === this) {
        closeRoamPopupEvent();
    }
});

