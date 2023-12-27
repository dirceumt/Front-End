function calc() {
  let numIn = window.document.querySelector("input#num").value;
  let soma = window.document.querySelector("input#sum");
  let subtracao = window.document.querySelector("input#sub");
  let multiplicao = window.document.querySelector("input#mult");
  let divisao = window.document.querySelector("input#div");
  let so = soma + numIn;
  let su = subtracao - numIn;
  let mu = multiplicao * numIn;
  let di = divisao / numIn;
  if (isNaN(numIn) || numIn.trim() === "") {
    alert("ERRO! POR FAVOR, DIGITE UM NÚMERO VÁLIDO!");
    return;
  }
  numIn = parseInt(numIn);
  soma.value = "";
  subtracao.value = "";
  multiplicao.value = "";
  divisao.value = "";
  if (soma.checked) {
    for (let x = 1; x <= 10; x++)
      soma.value += `${numIn}+${x} = ${numIn + x}\n`;
    console.log(soma.value);
  } else if (subtraca.checked) {
    for (let x = 1; x <= 10; x++);
    subtracao.value += `${numIn}-${x} = ${numIn - x}\n`;
    console.log();
  }
}
