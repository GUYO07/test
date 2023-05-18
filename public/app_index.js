const { SerialPort } = require("../node_modules/serialport");
const arduino = require("../test");
let resu;

arduino
  .getPortsList()
  .then((result) => {
    if (result.length > 0) {
      console.log(result);
      resu = result;
      // Perform other operations with the result
     
      document.getElementById("demo").innerHTML = result;
    } else {
      console.log("No available ports found.");
      // Handle the case when no ports are found
    }
  })
  .catch((error) => console.error("Error:", error));
