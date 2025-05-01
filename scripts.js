

function startCountdown() {
    var countdownDate = new Date("Nov 20, 2025 19:30:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "¡Tiempo terminado!";
        }
    }, 1000);
}

startCountdown();


// Obtener el modal
const modal = document.getElementById("infoModal");

// Obtener el botón que abre el modal
const btn = document.getElementById("contribuirButton");

// Obtener el <span> que cierra el modal
const span = document.getElementById("closeModal");

// Cuando el usuario haga clic en el botón, abrir el modal
btn.addEventListener("click", function(event) {
    event.preventDefault(); // Evitar que el enlace se ejecute
    modal.style.display = "block"; // Mostrar el modal
});

// Cuando el usuario haga clic en <span> (X), cerrar el modal
span.addEventListener("click", function() {
    modal.style.display = "none"; // Ocultar el modal
});

// Cuando el usuario haga clic fuera del modal, también cerrarlo
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Ocultar el modal
    }
});