// Definição do conteúdo para cada categoria
import { homeItems, snacksItems, pizzasItems } from "./itens.js";

// Função para criar um modal dinâmico
function createModal() {
  const modal = document.createElement("div");
  modal.id = "item-modal";
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <div id="modal-text"></div>
    </div>
  `;
  document.body.appendChild(modal);

  // Fechar modal ao clicar na área fora do conteúdo ou no botão de fechar
  modal.addEventListener("click", (event) => {
    if (
      event.target === modal ||
      event.target.classList.contains("close-button")
    ) {
      modal.style.display = "none";
    }
  });
}

// Função para mostrar o modal
function showModal(content) {
  const modal = document.getElementById("item-modal");
  const modalText = document.getElementById("modal-text");

  // Define o conteúdo do modal
  modalText.textContent = content;

  // Exibe o modal
  modal.style.display = "block";
}

// Função para adicionar itens a uma div específica
function addItemsToBox(items, boxId) {
  const box = document.getElementById(boxId);

  // Limpa o conteúdo existente, se necessário
  box.innerHTML = box.querySelector("h2")?.outerHTML || "";

  // Adiciona cada item à div
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "menu-item"; // Classe para estilização

    itemDiv.innerHTML = `
      <span class="menu-name modal-trigger">${item.name}</span>
      <span class="menu-price">
        <span class="menu-size">${item.size || ""}</span> ${item.price}
      </span>
    `;

    // Adiciona evento de clique para abrir o modal
    itemDiv.querySelector(".modal-trigger").addEventListener("click", () => {
      const message = item.msg || `Detalhes do item: ${item.name}`;
      showModal(message);
    });

    box.appendChild(itemDiv);
  });
}

// Cria o modal no DOM
createModal();

// Adiciona os itens às divs correspondentes
addItemsToBox(homeItems, "homebox");
addItemsToBox(snacksItems, "snacksbox");
addItemsToBox(pizzasItems, "pizzabox");
