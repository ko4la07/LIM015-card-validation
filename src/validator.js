// import {revArr} from './index'
const validator = {
  isValid: function (cardNumber) {
    // cardNumber = document.getElementById("cardNumber").value;
    let cardNumberStr = cardNumber.toString();
    let card = Array.from(cardNumberStr, x=>parseInt(x));
    let tarjeta = card.reverse();
    let sum = 0;
    for(let i=0; i < tarjeta.length; i++){
      let intVal = tarjeta[i];
      if(i % 2 != 0){
        intVal *= 2;
        if(intVal > 9){
          intVal = 1+ (intVal % 10);
        }
      }
      sum += intVal;
    }
    if (sum % 10 === 0 && sum !== 0){
      return true;
    } 
    else{
      return false;
    }
  },
  maskify: function (cardNumber){
    return cardNumber.length
  }
};
export default validator;
