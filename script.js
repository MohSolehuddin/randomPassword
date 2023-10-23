function Cetak() {
  var jenisPass = document.getElementById("jenisPass").value;
  function randomPassword(jenisPass, length) {
    var Huruf = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var Simbol = "!@#$%^&*()-+<>!@#$%^&*()-+<>";
    var Angka = "01234567890123456789";
    var chars = Huruf + Simbol + Angka;
    console.log(chars);
    var pass = "";
    if (jenisPass == "Angka") {
      for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * Angka.length);
        pass += Angka.charAt(i);
      }
      document.getElementById("Output").innerHTML = `${pass}`;
    }
    else if(jenisPass=="Huruf"){
      for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * Huruf.length);
        pass += Huruf.charAt(i);
      }
      document.getElementById("Output").innerHTML = `${pass}`;
    }
    else if(jenisPass=="Simbol"){
      for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * Simbol.length);
        pass += Simbol.charAt(i);
      }
      document.getElementById("Output").innerHTML = `${pass}`;
    }else{
       for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
      }
      document.getElementById("Output").innerHTML = `${pass}`;
    }
  }
  length = document.getElementById("panjangPass").value;
  randomPassword(jenisPass, length);
}
