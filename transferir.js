function mostrarCampos() {
  var tipoTransferencia = document.getElementById("tipo-transferencia").value;

  var campoChavePix = document.getElementById("campo-chave-pix");
  var campoBancoTed = document.getElementById("campo-banco-ted");
  var campoAgenciaTed = document.getElementById("campo-agencia-ted");
  var campoContaTed = document.getElementById("campo-conta-ted");

  if (tipoTransferencia === "pix") {
    campoChavePix.style.display = "block";
    campoBancoTed.style.display = "none";
    campoAgenciaTed.style.display = "none";
    campoContaTed.style.display = "none";
  } else if (tipoTransferencia === "ted") {
    campoChavePix.style.display = "none";
    campoBancoTed.style.display = "block";
    campoAgenciaTed.style.display = "block";
    campoContaTed.style.display = "block";
  }
}

function realizarTransferencia() {
  var tipoTransferencia = document.getElementById("tipo-transferencia").value;
  var valorTransferencia = document.getElementById("valor-transferencia").value;

  if (tipoTransferencia === "pix") {
    var chavePix = document.getElementById("chave-pix").value;
    alert("Transferência PIX realizada para a chave: " + chavePix + ", no valor de R$" + valorTransferencia);
  } else if (tipoTransferencia === "ted") {
    var bancoTed = document.getElementById("banco-ted").value;
    var agenciaTed = document.getElementById("agencia-ted").value;
    var contaTed = document.getElementById("conta-ted").value;
    alert("Transferência TED realizada para banco: " + bancoTed + ", agência: " + agenciaTed + ", conta: " + contaTed + ", no valor de R$" + valorTransferencia);
  }
}