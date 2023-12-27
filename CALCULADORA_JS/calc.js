function add(parametro) {
  window.document.querySelector("[name='tela']").value += parametro;
}
function calcular() {
  conta = window.document.querySelector("[name='tela']").value;
  window.document.querySelector("[name='tela']").value = eval(conta);
}
function porcentagem() {
  conta = window.document.querySelector("[name='tela']").value = "/100";
  window.document.querySelector("[name='tela']").value = eval(conta);
}
function butonAC() {
  window.document.querySelector("[name='tela']").value = "";
}
