/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* import validator from './validator.js'; */

let cardNumber;
let arr;
let revArr;


/* window.cambiadisplay = function (id) {
  cardNumber = document.getElementById("cardNumber").value;
  arr = Array.from(cardNumber,x=>parseInt(x));
  console.log(arr);
  revArr = arr.reverse();
   console.log(revArr);
  console.log(cardNumber);

  if (id == "dos" && validator.isValid(revArr) == true) {
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "block";
    document.getElementById("tres").style.display = "none";
  } else if (id == "tres") {
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "block";
  }
} */


function cambiadisplay(id) {
  cardNumber = document.getElementById("cardNumber").value;
  arr = Array.from(cardNumber,x=>parseInt(x));
  console.log(arr);
  revArr = arr.reverse();
   console.log(revArr);
  console.log(cardNumber);

  if (id == "dos") {
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "block";
    document.getElementById("tres").style.display = "none";
  } else if (id == "tres") {
    document.getElementById("uno").style.display = "none";
    document.getElementById("dos").style.display = "none";
    document.getElementById("tres").style.display = "block";
  }
}


function onlyNumbers(e) {
  return e.charCode >= 48 && e.charCode <= 57;
}



// console.log(validator);

