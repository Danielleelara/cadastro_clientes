var form = document.querySelector("form");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var cliente = obtemClienteDoFormulario(event.target);
    adicionaClienteNaTabela(cliente);
    form.reset();
});

function adicionaClienteNaTabela(cliente) {
  var clienteTr = montaTr(cliente);
  var tabela = document.querySelector("#tabela-clientes");
  tabela.appendChild(clienteTr);
}

function obtemClienteDoFormulario(form) {
 var cliente = {
    nome: form.nome.value,
    email: form.email.value,
    documento: form.documento.value,
    telefone: form.telefone.value,
    cep: form.cep.value,
    rua: form.rua.value,
    numero: form.numero.value,
    bairro: form.bairro.value,
    cidade: form.cidade.value,
    estado: form.estado.value,
  };

  return cliente;
}

function montaTr(cliente) {
  var clienteTr = document.createElement("tr");
  clienteTr.classList.add("cliente");

  clienteTr.appendChild(montaTd(cliente.nome, "nome"));
  clienteTr.appendChild(montaTd(cliente.email, "email"));
  clienteTr.appendChild(montaTd(cliente.documento, "documento"));
  clienteTr.appendChild(montaTd(cliente.telefone, "telefone"));
  clienteTr.appendChild(montaTd(cliente.cep, "CEP"));
  clienteTr.appendChild(montaTd(cliente.rua, "rua"));
  clienteTr.appendChild(montaTd(cliente.numero, "numero"));
  clienteTr.appendChild(montaTd(cliente.bairro, "bairro"));
  clienteTr.appendChild(montaTd(cliente.cidade, "cidade"));
  clienteTr.appendChild(montaTd(cliente.estado, "estado"));

  return clienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
