const CollectionOfoddeven = (number) => {
    let sumEven =0
    let  sumOdd=0
  number.forEach((element)=> {
      element%2 ==0
      ? (sumEven= sumEven+element)
      : (sumOdd= sumOdd+element);
        
    });
    return `Sum of Even Numbers=${sumEven} and sum of odd numbers =${sumOdd} Total sum=${sumEven+sumOdd}`
     
}

console.log(CollectionOfoddeven([5,4,,81,52,14,10,6,7,21,20]));