function box() {
  var flexbox = window.document.querySelector("div#boxx");
  var ano = window.document.getElementById("anoNascimento").value;
  var data = new Date();
  var year = data.getFullYear();
  //var ano = window.prompt("EM QUE ANO VOCÊ NASCEU? ");
  var idade = year - ano;
  if (isNaN(ano)) {
    window.document.getElementById("imgm").src = "erro.png";
    console.log("erro");
  } else {
    if (idade >= 0 && idade < 2) {
      flexbox.textContent = `VOCÊ É UM BABÊ! SÓ DEM APENAS ${idade} ANOS.`;
      window.document.getElementById("imgm").src = "babyboy.png";
    } else if (idade >= 2 && idade < 12) {
      flexbox.innerHTML = `VOCE É UMA CRIANÇA! TEM ${idade} ANOS.`;
      window.document.getElementById("imgm").src = "boy.png";
    } else if (idade >= 12 && idade < 18) {
      flexbox.innerHTML = `VOCÊ É UM ADOLESCENTE! TEM ${idade} ANOS.`;
    } else if (idade >= 18 && idade < 60) {
      flexbox.innerHTML = `VOCÊ É UM, ADULTO! TEM ${idade} ANOS.`;
      window.document.getElementById("imgm").src = "guy.png";
    } else {
      flexbox.innerHTML = `VOCÊ É UM IDOSO! TEM ${idade} ANOS.`;
      window.document.getElementById("imgm").src = "oldman.png";
    }
    fecharModal();
  }
}

function fecharModal() {
  var modal = window.document.querySelector("dialog#dial");
  modal.close();
}
