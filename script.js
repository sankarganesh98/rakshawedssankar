function showLetter() {

    let name = document.getElementById("guestName").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("letterScreen").style.display = "flex";

    /* START MUSIC AFTER USER CLICK */

    document.getElementById("bgMusic").play();

    startFlowers();

    document.getElementById("letterTitle").innerHTML = "Dear " + name + ",";

    let message = "From the deepest corners of our hearts, we thank you for being part of our lives. " +
        "If this message has reached you, it means you hold a very special place in our journey. " +
        "We would be truly honoured and delighted to see you join us as we celebrate one of the most cherished moments of our lives — our wedding day.";

    typeWriter(message, 0);

}



function typeWriter(text, i) {

    if (i < text.length) {

        document.getElementById("letterText").innerHTML += text.charAt(i);

        setTimeout(function () {

            typeWriter(text, i + 1);

        }, 50);

    }

    else {

        let endText = "With love, Sankar, Raksha & Family";

        typeWriterEnd(endText, 0);

    }
    function typeWriterEnd(text, i) {

        if (i < text.length) {

            document.getElementById("letterEnd").innerHTML += text.charAt(i);

            setTimeout(function () {

                typeWriterEnd(text, i + 1);

            }, 120);

        }

    }

}



function enterWebsite() {

    document.getElementById("letterScreen").style.display = "none";
    document.getElementById("mainWebsite").style.display = "block";

    document.body.style.overflow = "auto";

}



/* FLOWERS */

function startFlowers() {

    const container = document.querySelector(".flower-container");

    function createFlower() {

        const flower = document.createElement("div");

        flower.classList.add("flower");

        flower.innerHTML = "🌸";

        flower.style.left = Math.random() * 100 + "vw";

        flower.style.animationDuration = (4 + Math.random() * 5) + "s";

        container.appendChild(flower);

        setTimeout(() => flower.remove(), 9000);

    }

    setInterval(createFlower, 300);

}
const weddingDate = new Date("May 29, 2026 06:00:00").getTime();

setInterval(function () {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (document.getElementById("days")) {

        document.getElementById("days").innerHTML = days;

        document.getElementById("hours").innerHTML = hours;

        document.getElementById("minutes").innerHTML = minutes;

        document.getElementById("seconds").innerHTML = seconds;

    }

}, 1000);

/* GALLERY SLIDESHOW */

let galleryIndex = 0;

showGallerySlides();

function showGallerySlides() {

    let i;

    let slides = document.getElementsByClassName("gallerySlide");

    for (i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";

    }

    galleryIndex++;

    if (galleryIndex > slides.length) {

        galleryIndex = 1;

    }

    slides[galleryIndex - 1].style.display = "block";

    setTimeout(showGallerySlides, 3500);

}