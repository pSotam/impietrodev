/* =========================================================
   LANGUAGE SWITCHER
   ========================================================= */

const languageToggle = document.getElementById("language-toggle");

let currentLanguage = localStorage.getItem("language") || "en";


/* =========================================================
   UPDATE LANGUAGE
   ========================================================= */

function updateLanguage() {

    const translatableElements =
        document.querySelectorAll("[data-pt][data-en]");


    translatableElements.forEach(element => {

        element.textContent =
            element.dataset[currentLanguage];

    });


    /* =====================================================
       HTML LANGUAGE
       ===================================================== */

    document.documentElement.lang =
        currentLanguage === "pt"
            ? "pt-BR"
            : "en";


    /* =====================================================
       LANGUAGE BUTTON
       ===================================================== */

    updateLanguageButton();


    /* =====================================================
       IMAGE ALT TEXT
       ===================================================== */

    const images =
        document.querySelectorAll("[data-alt-pt][data-alt-en]");


    images.forEach(image => {

        image.alt =
            currentLanguage === "pt"
                ? image.dataset.altPt
                : image.dataset.altEn;

    });


    /* =====================================================
       SAVE LANGUAGE
       ===================================================== */

    localStorage.setItem(
        "language",
        currentLanguage
    );

}


/* =========================================================
   LANGUAGE BUTTON
   ========================================================= */

function updateLanguageButton() {

    if (!languageToggle) {
        return;
    }


    const portuguese =
        languageToggle.querySelector(".language-pt");

    const english =
        languageToggle.querySelector(".language-en");


    if (!portuguese || !english) {
        return;
    }


    if (currentLanguage === "pt") {

        portuguese.classList.add("active");
        english.classList.remove("active");

    } else {

        portuguese.classList.remove("active");
        english.classList.add("active");

    }

}


/* =========================================================
   TOGGLE LANGUAGE
   ========================================================= */

if (languageToggle) {

    languageToggle.addEventListener("click", () => {

        currentLanguage =
            currentLanguage === "pt"
                ? "en"
                : "pt";


        updateLanguage();

    });

}


/* =========================================================
   INITIALIZE
   ========================================================= */

updateLanguage();


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

const navigationLinks =
    document.querySelectorAll('nav a[href^="#"]');


navigationLinks.forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");


        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   PROJECT LINKS
   ========================================================= */

const projectLinks =
    document.querySelectorAll(".project-arrow");


projectLinks.forEach(link => {

    link.addEventListener("click", () => {

        link.classList.add("clicked");


        setTimeout(() => {

            link.classList.remove("clicked");

        }, 300);

    });

});