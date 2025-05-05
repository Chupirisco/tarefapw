const button = document.getElementById('botao');

button.addEventListener('mouseover', (event) => {
  if (event.ctrlKey) return;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  const padding = 10;

  const maxLeft = windowWidth - buttonWidth - padding;
  const maxTop = windowHeight - buttonHeight - padding;

  const randomLeft = Math.random() * maxLeft + padding / 2;
  const randomTop = Math.random() * maxTop + padding / 2;

  button.style.left = `${randomLeft}px`;
  button.style.top = `${randomTop}px`;
  button.style.transform = 'none';
});

document.getElementById("botao").addEventListener("click", () => {
  alert("Função de pesquisa ainda não implementada.");
});

document.getElementById("botaoerro").addEventListener("click", () => {
  window.location.href = "erro.html";
});

