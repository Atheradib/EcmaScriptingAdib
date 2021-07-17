const CollectionSumOfEven = (number) =>{
    let sum=0;
    number.forEach((element)=> {
        element % 2 === 0 && (sum = sum + element);
    });
}
console.log(CollectionSumOfEven([5,2,,7,9,10,8,17,115,10]));

