function verify() {
  var imgm = window.document.querySelector("img#imgm");
  var dayIn = window.document.querySelector("input#dia").value;
  var monthIn = window.document.querySelector("input#mes").value;
  var yearIn = window.document.querySelector("input#ano").value;
  var dat = new Date();
  var day = dat.getDate();
  var month = dat.getMonth() + 1;
  var year = dat.getFullYear();
  var resu = window.document.querySelector("div#d2");
  var dayNow = day - dayIn;
  var monthNow = month - monthIn;
  var yearNow = year - yearIn;
  if (
    dayIn <= 0 ||
    Number(dayIn) > 31 ||
    monthIn <= 0 ||
    Number(monthIn) > 12 ||
    yearIn <= 0 ||
    Number(yearIn) > year
  ) {
    imgm.src = "erro.png";
  } else {
    resu.innerHTML = `VOCÊ TEM ${yearNow} ANOS, ${monthNow} MESES E ${dayNow} DIAS DE VIDA!`;
  }
}
function clean() {
  window.document.querySelector("input#dia").value = "";
  window.document.querySelector("input#mes").value = "";
  window.document.querySelector("input#ano").value = "";
  window.document.querySelector("div#d2").textContent = "";
  window.document.querySelector("img#imgm").src = "";
}
function popup(imageSrc) {
  var popup = window.document.querySelector("img#imgm");
  imgm.src = imageSrc;
}
function closepop() {
  window.document.querySelector("div#d3").style.display = "none";
}
