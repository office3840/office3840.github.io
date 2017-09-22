/**
 * Klick-Handler für Buttons initialisieren. 
 * Sucht nach Elementen mit der Klasse "button" und einem "data-link" Attribut. Öffnet die im Attribut angegebene URL
 * bei einem Klick auf den Button in einem neuen Tab.
 * 
 */
function initButtons() {

    const buttons = document.querySelectorAll(".button");
    if (!buttons) return
    
    [].forEach.call(buttons, function (button) {
        const link = button.dataset.link;
        if (!link) return;

        button.addEventListener("click", function() {
            window.open(link);
        });
    });

}

/**
 * Initialisiert die Partikel-Animation
 * 
 */
function initParticles() {
    particlesJS.load("particles", "/particles.json?v=1", function () {
    });
}

/**
 * Initiiert die Google-Maps Karte am Seitenende. Wird von der Google Maps API aufgerufen, sobald die Lib geladen ist
 * 
 */
function initMap() {

    const schinkelstr = {
        lat: 51.2325243,
        lng: 6.7929929
    };
    const canvas = document.getElementById("map");

    const map = new google.maps.Map(canvas, {
        center: schinkelstr,
        zoom: 15,
        scrollwheel: false
    });
    const marker = new google.maps.Marker({
        position: schinkelstr,
        map: map
    });
}

/**
 * Ruft die init() Funktionen auf, sobald der DOM geladen ist
 * 
 */
document.addEventListener("DOMContentLoaded", function (event) {
    initButtons();
    initParticles();
});