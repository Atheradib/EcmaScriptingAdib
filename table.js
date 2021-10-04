const table = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num}X${i}=${i * num}`);
  }
};
table(4);

// for (let i = 1; i <= 10; i++) console.log(i * 3);

// Concurrency model in Javascript
// console.log("start")
// setTimeout(function cb(){
// console.log("call back")
// },5000);
// console.log("end")

// let startDate = new Date().getTime()
// let endDate= startDate;
// while(endDate < startDate + 10000) {
// endDate=new Date().getTime()
// }

// console.log("while expires")

// If you give 0 milliseconds to setTimeOut (but it takes to register in GEC global execution context)
// console.log("Start")

// setTimeout(function ab(){
// console.log("call back")

// },0)

// console.log("end")
