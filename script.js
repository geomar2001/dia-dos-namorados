const inicio = new Date("2023-01-08T00:00:00");

function atualizarTempo() {
  const agora = new Date();
  let anos = agora.getFullYear() - inicio.getFullYear();

  const aniversario = new Date(inicio);
  aniversario.setFullYear(agora.getFullYear());
  if (agora < aniversario) anos--;

  const diffAnos = new Date(inicio);
  diffAnos.setFullYear(inicio.getFullYear() + anos);
  const restante = agora - diffAnos;

  const dias = Math.floor(restante / (1000 * 60 * 60 * 24));
  const horas = Math.floor((restante / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((restante / (1000 * 60)) % 60);
  const segundos = Math.floor((restante / 1000) % 60);

  document.getElementById("contador").textContent =
    `Estamos juntos há ${anos} ano(s), ${dias} dia(s), ${horas}h ${minutos}min ${segundos}s 💞`;
}

// 🎠 Controle do carrossel de imagens
let current = 0;
const imgs = document.querySelectorAll('.carousel img');

function nextSlide() {
  imgs[current].classList.remove('active');
  current = (current + 1) % imgs.length;
  imgs[current].classList.add('active');
}

imgs[0].classList.add('active');
setInterval(nextSlide, 4000);

// 🎶 Controle do áudio
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById('audio');
  const playPauseBtn = document.getElementById('playPauseBtn');

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = '⏸️ Pausar Música';
    } else {
      audio.pause();
      playPauseBtn.textContent = '▶️ Tocar Música';
    }
  });

  // 🟢 Início do contador quando clicar em "Iniciar"
  document.getElementById("iniciar").addEventListener("click", () => {
    document.getElementById("iniciar").style.display = "none";
    atualizarTempo();
    setInterval(atualizarTempo, 1000);
  });
});