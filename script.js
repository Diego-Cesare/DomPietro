// Seleciona todos os botões e as divs de conteúdo
const buttons = document.querySelectorAll(".toggle-btn");
const contents = document.querySelectorAll(".content");

contents.forEach((content) => content.classList.remove("active"));

setTimeout(() => {
  document.getElementById("homebox").classList.add("active");
}, 2000);

// Função para atualizar o destaque do botão
function updateButtonHighlight(activeBoxId) {
  buttons.forEach((button) => {
    const targetId = button.getAttribute("data-target");
    if (targetId === activeBoxId) {
      button.classList.add("active-btn"); // Adiciona a classe ao botão correspondente
    } else {
      button.classList.remove("active-btn"); // Remove a classe de outros botões
    }
  });
}

// Adiciona o evento de clique a cada botão
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove a classe 'active' de todas as divs
    contents.forEach((content) => {
      content.classList.remove("active");
    });

    // Identifica a div alvo com base no atributo data-target
    const targetId = button.getAttribute("data-target");
    const targetDiv = document.getElementById(targetId);

    // Adiciona a classe 'active' à div alvo
    if (targetDiv) {
      targetDiv.classList.add("active");
      updateButtonHighlight(targetId); // Atualiza o destaque do botão
    }
  });
});
