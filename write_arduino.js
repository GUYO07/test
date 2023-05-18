//const SerialPortList = require('@serialport/list');
const { SerialPort } = require("serialport");
const readline = require("readline");
const port = new SerialPort({
  path: "COM9",
  baudRate: 115200,
});

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion() {
  readInterface.question("What's your input? (type 'exit' to quit) ", (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log('Exiting...');
      readInterface.close();
    } else {
      console.log(`input is ${input}!`);
      port.write(input);
      askQuestion(); // เรียกใช้ฟังก์ชันตนเองเพื่อถามคำถามอีกครั้ง
    }
  });
}

askQuestion(); // เรียกใช้ฟังก์ชันสำหรับครั้งแรก