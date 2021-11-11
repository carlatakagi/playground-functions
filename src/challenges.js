// lembrar de apagar os console.log e comentarios desnecessarios

// Desafio 1
function compareTrue(valor1, valor2) {
  
  if (valor1 === true && valor2 === true){
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true)); // ok

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;

}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1)); // ok

// Desafio 3
// consultei o método split no DevMedia
// Link: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence() {
  let sentence = 'go Trybe';
  
  return sentence.split(".");

}
console.log(splitSentence()); //ok


// Desafio 4
function concatName() {
  // ao receber uma ARRAY DE STRINGS
  //retorna uma string com o formato 'ULTIMO ITEM, PRIMEIRO ITEM'
  let arrNames = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
  // [0, 1, 2, 3]
  for (let i = 0; i < arrNames.length; i++) {

  }


}

// Desafio 5
function footballPoints(wins, ties) {
  //para cada vitoria soma 3 pontos - wins * 3
  // para cada empate soma 1 ponto - ties * 1
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  let totalPoints = winsPoints + tiesPoints;

  return totalPoints
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0)); //ok

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
