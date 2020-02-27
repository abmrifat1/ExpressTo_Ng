const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", function(req, res) {
  res.send("Hello......");
});

app.get("/list", (req, res) => {
  const dataList = [
    {
      userName: "Abc",
      email: "abc@gmail.com",
      password: "1333",
      confirmPassword: "1333"
    },
    {
      userName: "Abcd",
      email: "abcd@gmail.com",
      password: "13433",
      confirmPassword: "13433"
    }
  ];
  res.json({
    message: "Data List",
    data: dataList,
    status: 200
  });
});

app.post("/enroll", function(req, res) {
  console.log("console log from server", req.body);
  res.json({
    // message: "get dta okay",
    data: req.body,
    status: 200
  });
});

app.listen(PORT, function() {
  console.log("server is running on port:" + PORT);
});
