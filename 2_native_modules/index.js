const fs = require("fs");

// fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved");
// });

var contents = fs.readFile("message.txt", {encoding: 'utf8'});

console.log(contents); 