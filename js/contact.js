
function fullFormValidation() {

    var text,x;
    const textreset = "";
    
    if(document.forma.fname.value == "") {
      text = "Niste uneli ime";
      document.getElementById("tekst").style.color="red";
      document.getElementById("tekst").innerHTML = text;

      document.getElementById("info-tekst1").innerHTML = textreset;

      return false;

    } else {
      text = "forma sadrži ime";
      document.getElementById("info-tekst1").style.color="green";
      document.getElementById("info-tekst1").innerHTML = text;
    }

    if (document.forma.fname.value == "") {
        text = "Broj nije u odgovarajućem opsegu";
        document.getElementById("tekst").style.color = "red";
        document.getElementById("tekst").innerHTML = text;

        document.getElementById("info-tekst4").innerHTML = textreset;

        return false;

    } else {
        text = "Broj je ok, nalazi se u odgovarajućem opsegu";
        document.getElementById("info-tekst4").style.color = "green";
        document.getElementById("info-tekst4").innerHTML = text;
    }
    
    if(document.forma.femail.value == "") {
      text = "Unesite vašu email adresu";
      document.getElementById("tekst").style.color="red";
      document.getElementById("tekst").innerHTML = text;

      document.getElementById("info-tekst2").innerHTML = textreset;

      return false;

    } else {
      text = "forma sadrži email adresu";
      document.getElementById("info-tekst2").style.color="green";
      document.getElementById("info-tekst2").innerHTML = text;
    }

    if(document.forma.fporuka.value == "") {
      text = "Unesite poruku";
      document.getElementById("tekst").style.color="red";
      document.getElementById("tekst").innerHTML = text;

      document.getElementById("info-tekst3").innerHTML = textreset;

      return false;

    } else {
      text = "forma sadrži poruku";
      document.getElementById("info-tekst3").style.color="green";
      document.getElementById("info-tekst3").innerHTML = text;

      text = "Forma sadrži sve parametre";
      alert(text);
    }
  }