// Fecha de la boda: 20 de noviembre de 2025 a las 19:30
const fechaBoda = new Date("2025-11-20T19:30:00").getTime();

const temporizador = setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fechaBoda - ahora;

  if (distancia < 0) {
    clearInterval(temporizador);
    document.getElementById("dias").textContent = "00";
    document.getElementById("horas").textContent = "00";
    document.getElementById("minutos").textContent = "00";
    document.getElementById("segundos").textContent = "00";
    return;
  }

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = String(dias).padStart(2, "0");
  document.getElementById("horas").textContent = String(horas).padStart(2, "0");
  document.getElementById("minutos").textContent = String(minutos).padStart(
    2,
    "0"
  );
  document.getElementById("segundos").textContent = String(segundos).padStart(
    2,
    "0"
  );
}, 1000);

// MODAL DE CONTRIBUCIÓN
const btn = document.getElementById("contribuirButton");
const modal = document.getElementById("infoModal");
const close = document.getElementById("closeModal");

if (btn && modal && close) {
  btn.onclick = () => (modal.style.display = "flex");
  close.onclick = () => (modal.style.display = "none");
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
}

// BOTÓN DE PLAY / PAUSA + MODAL DE BIENVENIDA
document.addEventListener("DOMContentLoaded", () => {
  const musica = document.getElementById("musica");
  const botonMusica = document.getElementById("boton-musica");
  const iconoMusica = document.getElementById("icono-musica");

  let tocando = true;

  musica.muted = true;
  musica.play().catch(() => {});

  document.addEventListener(
    "click",
    () => {
      if (musica.muted) {
        musica.muted = false;
        musica.play().catch(() => {});
        tocando = true;
        iconoMusica.classList.replace("bi-play-fill", "bi-pause-fill");
      }
    },
    { once: true }
  );

  botonMusica.addEventListener("click", () => {
    if (tocando) {
      musica.pause();
      iconoMusica.classList.replace("bi-pause-fill", "bi-play-fill");
    } else {
      musica.play();
      iconoMusica.classList.replace("bi-play-fill", "bi-pause-fill");
    }
    tocando = !tocando;
  });

  // MODAL DE BIENVENIDA
  const bienvenidaModal = document.getElementById("modalBienvenida");
  const btnIngresar = document.getElementById("btnIngresar");

  // Solo mostrar si no ingresó antes
  if (!sessionStorage.getItem("ingresoHecho")) {
    bienvenidaModal.style.display = "flex";
  } else {
    bienvenidaModal.style.display = "none";
  }

  btnIngresar.addEventListener("click", (e) => {
    e.preventDefault();
    if (bienvenidaModal) {
      bienvenidaModal.style.display = "none";
    }
    sessionStorage.setItem("ingresoHecho", "true");
    musica.play().catch(() => {});
  });
});
