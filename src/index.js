import validator from './validator.js';

document.getElementById("btnDestAreq").addEventListener('click', function(){
  changeDisplay('uno');
});

document.getElementById("btnValidacion").addEventListener('click', function(){
  changeDisplay('dos');
});

document.getElementById("btnFinalizar").addEventListener('click', function(){
  changeDisplay('tres');
});

document.getElementById("cardNumber").addEventListener('keypress', function(e){
  onlyNumbers(e);
});

function onlyNumbers(e) {
  if(e.charCode >= 48 && e.charCode <= 57){
    return true;
  }
  e.preventDefault();
  return false;
}

function changeDisplay(id) {

let cardNumber = document.getElementById("cardNumber").value;
// console.log(cardNumber);
let res = validator.isValid(cardNumber);
// console.log(res);

let masked = validator.maskify(cardNumber);
// console.log(masked);

if (id == "uno") {
  document.getElementById("cero").style.display = "none";
  document.getElementById("uno").style.display = "block";
  document.getElementById("dos").style.display = "none";
  document.getElementById("tres").style.display = "none";
} else if (id == "dos") {
  document.getElementById("cero").style.display = "none";
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "block";
    document.getElementById("displayResultado").innerHTML = res ? "Tu tarjeta es válida!!!" : "Tu tarjeta no es válida";
    document.getElementById("masked").innerHTML = masked;
    document.getElementById("tres").style.display = "none";
  } else if (id == "tres") {
    document.getElementById("cero").style.display = "none";
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "block";
  }
}





// console.log(validator);

