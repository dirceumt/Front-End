function verify() {
  let imgm = window.document.querySelector("img#imgm");
  let dayIn = window.document.querySelector("input#dia").value;
  let monthIn = window.document.querySelector("input#mes").value;
  let yearIn = window.document.querySelector("input#ano").value;
  let dat = new Date();
  let day = dat.getDate();
  let month = dat.getMonth() + 1;
  let year = dat.getFullYear();
  let resu = window.document.querySelector("div#d2");
  let dayNow = day - dayIn;
  let monthNow = month - monthIn;
  let yearNow = year - yearIn;
  if (
    dayIn <= 0 ||
    Number(dayIn) > 31 ||
    monthIn <= 0 ||
    Number(monthIn) > 12 ||
    yearIn <= 0 ||
    Number(yearIn) > year
  ) {
    resu.innerHTML = "DADOS INVALIDOS, TENTE NOVAMENTE!";
  } else if (dayNow < 0) {
    monthNow--;
    dayNow += new Date(year, month, 0).getDate();
  } else if (monthNow < 0) {
    yearNow--;
    monthNow += 12;
  }
  resu.innerHTML = `VOCÊ TEM ${yearNow} ANOS, ${monthNow} MESES E ${dayNow} DIAS DE VIDA!`;
}
function clean() {
  window.document.querySelector("input#dia").value = "";
  window.document.querySelector("input#mes").value = "";
  window.document.querySelector("input#ano").value = "";
  window.document.querySelector("div#d2").textContent = "";
  window.document.querySelector("img#imgm").src = "";
}
