function carregar() {
  var flexbox = window.document.querySelector("section#flexbox");
  var imgm = window.document.querySelector("img#img1");
  var p1 = window.document.querySelector("div#div1");
  var data = new Date();
  f24h = new Intl.DateTimeFormat("pt-BR");
  // var hour = 6;
  var hour = data.getHours();
  var minutes = data.getMinutes();
  p1.innerHTML = `AGORA SÃO ${hour}:${minutes} HORAS`;
  if (hour >= 5 && hour < 7) {
    imgm.src = "nascer.jpg";
    document.body.style.background = "blue";
  } else if (hour >= 7 && hour < 17) {
    imgm.src = "meio.jpg";
    document.body.style.background = "rgb(230, 177, 45)";
  } else if (hour >= 17 && hour < 18) {
    imgm.src = "por.jpg";
    document.body.style.background = "green";
  } else {
    imgm.src = "cheia.jpg";
    document.body.style.background = "black";
  }
  console.log(`${hour}:${minutes}:${sec}`);
}
carregar();
