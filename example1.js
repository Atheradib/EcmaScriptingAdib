const EmployeeInfo = (data) =>
  data.map(
    (item) =>
      `I am planning to do ${item.course} from ${item.institute} situated in ${item.city} having mobile no. ${item.mobileno}`
  );

console.log([
  {
    course: "PDAC",
    institute: "Pickupbiz",
    mobileNo: "9874561230",
    city: "Nanded",
  },
  {
    course: "Module1",
    institute: "Pickupbiz",
    mobileNo: "9874561230",
    city: "pune",
  },

  {
    course: "Module2",
    institute: "Pickupbiz",
    mobileNo: "9874561230",
    city: "HYD",
  },

  {
    course: "Module3",
    institute: "Pickupbiz",
    mobileNo: "9874561230",
    city: "Mumbai",
  },
]);
