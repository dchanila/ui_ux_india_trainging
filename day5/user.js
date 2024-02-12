const fs = require("fs");
let fileWrite = () => {
  let str = "Oliver,Jack,Harry,Jacob,Charlie,Thomas";
  fs.writeFile("./names.txt", str, (err) => {
    if (!err) {
      console.log("data writen");
    } else {
      throw err;
    }
  });
};

fileWrite();

let logUser = (username) => {
  fs.readFile("./names.txt", "utf8", (err, data) => {
    if (!err) {
      var user = data.search(username);
      if (user < 0) {
        fs.appendFile("./names.txt", "," + username, (err) => {
          if (!err) {
            console.log("username " + username + " added");
          } else {
            throw err;
          }
        });
      } else {
        console.log("user name already exist");
      }
    } else {
      throw err;
    }
  });
};
logUser("Sam");
