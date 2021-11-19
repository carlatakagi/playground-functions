// Desafio 10
// consultei o método sort()
// Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(arrTech, nome) {
  if (arrTech.length === 0) {
    return 'Vazio!';
  }

  arrTech.sort();
  let listaTech = [];

  for (let tecnologia of arrTech) {
    listaTech.push({
      tech: tecnologia,
      name: nome,
    });
  }
  return listaTech;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } if (lineA > Math.abs(lineB - lineC) || lineB > Math.abs(lineA - lineC) || lineC > Math.abs(lineB - lineA)) {
    return false;
  }
  if (lineA < lineB + lineC || lineB < lineA + lineC || lineC < lineA + lineB) {
    return true;
  }
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
