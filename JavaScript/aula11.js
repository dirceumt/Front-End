function calcular() {
  var vel = window.document.querySelector("input#vl");
  var resu = window.document.querySelector("input#res");
  var velocidade = Number(vel.value);
  res.innerHTML = `SUA VELOCIDADE É DE: ${velocidade}`;
  if (velocidade >= 100) {
    alert("VOCÊ FOI MULTADO! ");
  } else {
    alert("VOCÊ ESTA DENTRO DA VELOCIDADE PERMITIDA!");
  }
}
