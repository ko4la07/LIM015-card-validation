import validator from './validator.js';

document.getElementById("btnDestAreq").addEventListener('click', function(){
  changeDisplay('uno');
});

document.getElementById("btnValidacion").addEventListener('click', function(){
  changeDisplay('dos');
});

//-------

document.getElementById("btnRegresarValidacion").addEventListener('click', function(){
  changeDisplay('uno');
});

document.getElementById("btnHome").addEventListener('click', function(){
  changeDisplay('cero');
});

//------------------

// let cardNumber = document.getElementById("cardNumber").value;

// document.getElementById("btnValidacion").addEventListener('click',function(){ cardNumber.length == 0 ? (prompt('Debes ingresar tu número de tarjeta') & changeDisplay('uno')) : changeDisplay('dos')});

// document.getElementById("btnValidacion").addEventListener('click',function(){
//   if (cardNumber.length != 0){
//     changeDisplay('dos')
//   } 
//   alert('Debes ingresar tu número de tarjeta') && changeDisplay('uno')
// });


//-----------------

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

let franquicia = validator.getIssuer(cardNumber);

if (id == "cero") {
  document.getElementById("cero").style.display = "block";
  document.getElementById("uno").style.display = "none";
  document.getElementById("dos").style.display = "none";
  document.getElementById("tres").style.display = "none";
} else if (id == "uno") {
  document.getElementById("cero").style.display = "none";
  document.getElementById("uno").style.display = "block";
  document.getElementById("dos").style.display = "none";
  document.getElementById("tres").style.display = "none";
} else if (id == "dos") {
  if(cardNumber.length != 0){
    document.getElementById("cero").style.display = "none";
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "block";
    document.getElementById("displayResultado").innerHTML = res ? "Tu tarjeta es válida!!!" : "Tu tarjeta no es válida";
    document.getElementById("masked").innerHTML = masked;
    // document.getElementById("franquicia").innerHTML=franquicia;
    //-----------
    if(franquicia==='VISA'){
      document.getElementById("franquicia-1").style.display ="block";
      document.getElementById("franquicia-2").style.display ="none";
      document.getElementById("franquicia-3").style.display ="none";
    } else if(franquicia==='American Express'){
      document.getElementById("franquicia-1").style.display ="none";
      document.getElementById("franquicia-2").style.display ="block";
      document.getElementById("franquicia-3").style.display ="none";
    }else if(franquicia==='MasterCard'){
      document.getElementById("franquicia-1").style.display ="none";
      document.getElementById("franquicia-2").style.display ="none";
      document.getElementById("franquicia-3").style.display ="block";
    }
    //------------
    document.getElementById("tres").style.display = "none";

    
    if (res == true) {
      document.getElementById("dos-btnFinalizar").style.display="block";
      document.getElementById("dos-btnRegresarValidacion").style.display="none";
    } else{
      document.getElementById("dos-btnRegresarValidacion").style.display="block";
      document.getElementById("dos-btnFinalizar").style.display="none";
    }

  } else{
    alert('Debes ingresar tu número de tarjeta');
    return (id == "uno");
  }

  //----------------------------
  // document.getElementById("cero").style.display = "none";
  //   document.getElementById("uno").style.display = "none";
  //   document.getElementById("dos").style.display = "block";
  //   document.getElementById("displayResultado").innerHTML = res ? "Tu tarjeta es válida!!!" : "Tu tarjeta no es válida";
  //   document.getElementById("masked").innerHTML = masked;
  //   document.getElementById("tres").style.display = "none";
  } else if (id == "tres") {
    document.getElementById("cero").style.display = "none";
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "block";
  }
}





// console.log(validator);

