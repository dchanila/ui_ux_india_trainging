const fs = require("fs");
let fileWrite = () => {
  let str = "hey,there.. file system model to write into file";
  fs.writeFile("./log.txt", str + "At : " + new Date().getFullYear(), (err) => {
    if (!err) {
      console.log("data writen");
    } else {
      throw err;
    }
  });
};

fileWrite();

let fileRead = () => {
  fs.readFile("./log.txt", "utf8", (err, data) => {
    if (!err) {
      console.log(data);
    } else {
      throw err;
    }
  });
};

fileRead();
