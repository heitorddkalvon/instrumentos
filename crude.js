// Array para armazenar as tarefas
let tarefas = [];

// Seleciona o formulário e adiciona um listener para o evento submit
document.querySelector('#form-cadastro').addEventListener('submit', function(event) {
  event.preventDefault(); // previne o envio do formulário

  // Seleciona o campo de texto e o valor digitado nele
  const campoTexto = document.querySelector('#campo-texto');
  const texto = campoTexto.value.trim();

  if (texto.length > 0) {
    // Cria um objeto com a tarefa
    const tarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false,
      tipo: 'estudos' // default
    };

    // Adiciona a tarefa no array
    tarefas.push(tarefa);

    // Limpa o campo de texto
    campoTexto.value = '';

    // Fecha o modal de cadastro
    const modalCadastro = document.querySelector('#modal-cadastro');
    const bootstrapModalCadastro = bootstrap.Modal.getInstance(modalCadastro);
    bootstrapModalCadastro.hide();

    // Renderiza as tarefas na tela
    renderizarTarefas();
  }
});

// Função para renderizar as tarefas na tela
function renderizarTarefas() {
  const containerTarefas = document.querySelector('#tarefas');
  containerTarefas.innerHTML = '';

  tarefas.forEach(function(tarefa) {
    const divCol = document.createElement('div');
    divCol.classList.add('col');

    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const divCardHeader = document.createElement('div');
    divCardHeader.classList.add('card-header');
    divCardHeader.innerText = tarefa.texto;

    const divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');

    const pCardText = document.createElement('p');
    pCardText.classList.add('card-text');
    pCardText.innerText = tarefa.texto;

    const pBadge = document.createElement('p');
    pBadge.innerHTML = '<span class="badge text-bg-warning">' + tarefa.tipo + '</span>';

    const aBtnConcluida = document.createElement('a');
    aBtnConcluida.classList.add('btn', 'btn-success');
    aBtnConcluida.innerHTML = '<i class="bi bi-check-lg"></i>';
    aBtnConcluida.addEventListener('click', function() {
      tarefa.concluida = !tarefa.concluida;
      renderizarTarefas();
    });

    const aBtnExcluir = document.createElement('a');
    aBtnExcluir.classList.add('btn', 'btn-danger');
    aBtnExcluir.innerHTML = '<i class="bi bi-trash"></i>';
    aBtnExcluir.addEventListener('click', function() {
      const indice = tarefas.indexOf(tarefa);
      if (indice > -1) {
        tarefas.splice(indice, 1);
        renderizarTarefas();
      }
    });

    divCardBody.appendChild(pCardText);
    divCardBody.appendChild(pBadge);
    divCardBody.appendChild(aBtnConcluida);
    divCardBody.appendChild(aBtnExcluir);

    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);

    divCol.appendChild(divCard);

    containerTarefas.appendChild(divCol);
  });
}

// Chama a função para renderizar as tarefas na tela
renderizarTarefas();
