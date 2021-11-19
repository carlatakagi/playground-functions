/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
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

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
// consultei o método split no DevMedia
// Link: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
// consultei como pegar itens no StackOverflow
// Link: https://stackoverflow.com/questions/43714111/get-the-first-and-last-item-in-an-array-js/43714143
function concatName(arrNames) {
  let firstElement = arrNames[0]; // posição 0 pois começa no 0
  let lastElement = arrNames[arrNames.length - 1];
  let lastAndFirst = `${lastElement}, ${firstElement}`;

  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties;
  let totalPoints = winsPoints + tiesPoints;

  return totalPoints;
}

// Desafio 6
function highestCount(arrNumbers) {
  let maiorNumero = 0;
  let maiorNumeroRepetido = 0;

  for (let contador = 0; contador < arrNumbers.length; contador += 1) {
    if (arrNumbers[contador] > maiorNumero || contador === 0) {
      maiorNumero = arrNumbers[contador];
    }
  }
  for (let numero of arrNumbers) {
    if (maiorNumero === numero) {
      maiorNumeroRepetido += 1;
    }
  }
  return maiorNumeroRepetido;
}

// Desafio 7 - procurar metodo math.abs
// consultei método Math.abs
// Link: https://www.w3schools.com/jsref/jsref_abs.asp
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(mouse - cat1);
  const distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrNumbers) {
  arrNumbers.join(',');
  let resultado = [];

  for (let number of arrNumbers) {
    if (number % 3 === 0 && number % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (number % 5 === 0) {
      resultado.push('buzz');
    } else if (number % 3 === 0) {
      resultado.push('fizz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(stringEncode) {
  let resultado = '';
  for (let letra of stringEncode) {
    switch (letra) {
    case 'a':
      resultado += '1';
      break;
    case 'e':
      resultado += '2';
      break;
    case 'i':
      resultado += '3';
      break;
    case 'o':
      resultado += '4';
      break;
    case 'u':
      resultado += '5';
      break;
    default:
      resultado += letra;
    }
  }
  return resultado;
}

function decode(stringDecode) {
  let resultado = '';
  for (let letra of stringDecode) {
    switch (letra) {
    case '1':
      resultado += 'a';
      break;
    case '2':
      resultado += 'e';
      break;
    case '3':
      resultado += 'i';
      break;
    case '4':
      resultado += 'o';
      break;
    case '5':
      resultado += 'u';
      break;
    default:
      resultado += letra;
    }
  }
  return resultado;
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
