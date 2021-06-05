// import {revArr} from './index'
const validator = {
  isValid: function (cardNumber) {
    // cardNumber = document.getElementById("cardNumber").value;
    let cardNumberStr = cardNumber.toString();
    let cardArr = Array.from(cardNumberStr, x=>parseInt(x));
    let cardArrRev = cardArr.reverse();
    let sum = 0;
    for(let i=0; i < cardArrRev.length; i++){
      let intVal = cardArrRev[i];
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
    let cardNumberStr = cardNumber.toString();
    let maskedNumbers = '';
    let len = cardNumberStr.length;
    if(len > 4){
      let visibleNumbers = cardNumberStr.substring(len - 4, len);
      for(let i=0; i < len - 4; i++){
        maskedNumbers = maskedNumbers + "#";
      }
      return maskedNumbers + visibleNumbers;
    } else{
      return cardNumberStr;
    }
  }
};
export default validator;
