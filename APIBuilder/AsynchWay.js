const AsynchWay = () => {
  setTimeout(() => {
    console.log("first call..........");
  }, 4000);

  console.log("second call..........");
};
AsynchWay();
