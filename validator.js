
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
  },
  getIssuer: function(cardNumber){
    if (parseInt(cardNumber.substring(0,1)) === 4 && 13<= cardNumber.length && cardNumber.length <=16) {
      // document.getElementById('franquicia-1').innerHTML= 'visa';
      return 'VISA';
    } else if ((parseInt(cardNumber.substring(0,2))=== 34 || parseInt(cardNumber.substring(0,2))=== 37) && cardNumber.length==15){
      // document.getElementById('franquicia-2').innerHTML= 'American Express';
      return 'American Express'
    } else if (50 < parseInt(cardNumber.substring(0,2)) && parseInt(cardNumber.substring(0,2)) < 56 && cardNumber.length==16){
      // document.getElementById('franquicia-3').innerHTML= 'MasterCard';
      return 'MasterCard';
    }
  } 
};
export default validator;
