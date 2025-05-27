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


  let current = 0;
  const imgs = document.querySelectorAll('.carousel img');

  function nextSlide() {
    imgs[current].classList.remove('active');
    current = (current + 1) % imgs.length;
    imgs[current].classList.add('active');
  }

  imgs[0].classList.add('active'); // Ativa a primeira
  setInterval(nextSlide, 4000); // Troca a cada 4s



document.getElementById("iniciar").addEventListener("click", function () {
  document.getElementById("iniciar").style.display = "none";
  atualizarTempo();
  setInterval(atualizarTempo, 1000);
});
