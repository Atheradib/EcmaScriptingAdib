const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("I am from Australia....");
});
app.get("/dtl", (req, res) => {
  res.json({ data: ["ather", "adib", "Zulfa"] });
});
app.get("/emp", (req, res) => {
  res.send("I am Employee of Google....");
});
app.get("/dept", (req, res) => {
  res.send("I am from IT Department");
});
if (app.listen(5000)) {
  console.log("connected to localhost:5000");
}
