'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
let hora = s.slice(0, 2);
const minutos = s.slice(3, 5);
const segundos = s.slice(6, 8);
const periodo = s.slice(8, 10);

  let horaNum = parseInt(hora, 10);
  
if(periodo.toUpperCase() === 'PM' && horaNum !== 12) {
    horaNum += 12;
  }
if(periodo.toUpperCase() === 'AM' && horaNum === 12) {
    horaNum = 0;
  }
  
  const horaFormatada = horaNum.toString().padStart(2, '0');

  return `${horaFormatada}:${minutos}:${segundos}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
