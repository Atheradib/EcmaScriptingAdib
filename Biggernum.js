function BiggerNum(num1, num2){
    if(num1>num2){
        return num1;
    } else{
        return num2;
    }
}
console.log(`Bigger number is ${BiggerNum(13,58)}`);
console.log(`Bigger number is ${BiggerNum(133,58)}`);
console.log(`Bigger number is ${BiggerNum(13,158)}`);