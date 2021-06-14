
const validator = {
  isValid: function (cardNumber) {
    // let cardNumberStr = cardNumber.toString();
    let cardArr = Array.from(cardNumber, x=>parseInt(x));
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
    // let cardNumberStr = cardNumber.toString();
    let maskedNumbers = '';
    let len = cardNumber.length;
    if(len > 4){
      let visibleNumbers = cardNumber.substring(len - 4, len);
      for(let i=0; i < len - 4; i++){
        maskedNumbers = maskedNumbers + "#";
      }
      return maskedNumbers + visibleNumbers;
    } else{
      return cardNumber;
    }
  },
  getIssuer: function(cardNumber){
    if (parseInt(cardNumber.substring(0,1)) === 4 && 13<= cardNumber.length && cardNumber.length <=16) {
      return 'VISA';
    } else if ((parseInt(cardNumber.substring(0,2))=== 34 || parseInt(cardNumber.substring(0,2))=== 37) && cardNumber.length==15){
      return 'American Express'
    } else if (50 < parseInt(cardNumber.substring(0,2)) && parseInt(cardNumber.substring(0,2)) < 56 && cardNumber.length==16){
      return 'MasterCard';
    }
  } 
};
export default validator;
