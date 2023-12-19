function verify() {
  var anoIn = window.document.querySelector("input#ano").value;
  var dat = new Date();
  var year = getFullYear();
  var resu = window.document.querySelector("div#d2");
  var today = year - anoIn;
  window.alert = today;
  if (anoIn.value.lenght == 0 || anoIn.value > year) {
    window.alert(" DADOS INCORRETOS! TENTE NOVAMENTE! ");
  } else {
    window.alert("OK!");
  }
}
