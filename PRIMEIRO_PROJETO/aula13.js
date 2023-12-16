function carregar() {
  var flexbox = window.document.querySelector("section#flexbox");
  var imgm = window.document.querySelector("img#img1");
  var p1 = window.document.querySelector("div#box");
  var data = new Date();
  var hour = data.getHours();
  var minutes = data.getMinutes();
  var sec = data.getSeconds();
  p1.innerHTML = `AGORA SÃO ${hour} HORAS`;
  if (hour >= 0 && hour < 12) {
    imgm.src = "nascer.jpg";
  } else if (hour >= 12 && hour < 18) {
    imgm.src = "meio.jpg";
  } else {
    imgm.src = "cheia.jpg";
  }
  minutes = minutes < 10 ? "0" + minutes : minutes;
  sec = sec < 10 ? "0" + sec : sec;

  console.log(`${hour}:${minutes}:${sec}`);
}
carregar();
