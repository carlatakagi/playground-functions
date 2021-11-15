// lembrar de apagar os console.log e comentarios desnecessarios

// Desafio 1
function compareTrue(valor1, valor2) {
  let resultado;
  if (valor1 === true && valor2 === true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
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
function splitSentence(string) {
  return string.split(' ');
}
console.log(splitSentence('go trybe')); // ok

// Desafio 4
// consultei como pegar itens no StackOverflow
// Link: https://stackoverflow.com/questions/43714111/get-the-first-and-last-item-in-an-array-js/43714143
function concatName(arrNames) {
  let firstElement = arrNames[0];
  let lastElement = arrNames[arrNames.length - 1];
  let lastAndFirst = lastElement + ', ' + firstElement;

  return lastAndFirst;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); // ok

// Desafio 5
function footballPoints(wins, ties) {
  // para cada vitoria soma 3 pontos - wins * 3
  // para cada empate soma 1 ponto - ties * 1
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  let totalPoints = winsPoints + tiesPoints;

  return totalPoints;
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0)); // ok

// Desafio 6
function highestCount() {
  // seu código aqui
  // ainda nao
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if (cat1 === mouse - 3 && cat2 === mouse - 2) {
    return 'cat2';
  } else if (cat1 === mouse - 6 && cat2 === mouse - 12) {
    return 'cat1';
  } else if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(44, 38, 50));

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
