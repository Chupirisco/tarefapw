const button = document.getElementById('crazyButton');

button.addEventListener('mouseover', (event) => {  
  if (event.ctrlKey) {  
    return;
  }

  //pega os tamanhos da tela
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  //espaço para nao colar na borda
  const padding = 10; 

  // calculo para nao fugir da tela
  const maxLeft = windowWidth - buttonWidth - padding;
  const maxTop = windowHeight - buttonHeight - padding;

  const randomLeft = Math.random() * maxLeft + padding/2;
  const randomTop = Math.random() * maxTop + padding/2;
  
  //adiciona a posição ao style
  button.style.left = `${randomLeft}px`;
  button.style.top = `${randomTop}px`;

  // remove a posição inicial
  button.style.transform = 'none';
});

button.addEventListener('click', ()=>{
  // após o click apare isso
 alert('faz alguma coisa');
})