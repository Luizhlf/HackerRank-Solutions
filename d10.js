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