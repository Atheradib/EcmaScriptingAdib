// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 2000);
//   // console.log("welcome to pickupbiz");
// }
// x();

// following is thw example of closure
function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();
