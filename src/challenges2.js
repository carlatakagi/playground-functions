/* eslint-disable object-shorthand */
// Desafio 10
// consultei o método sort()
// Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function techList(arrTech, name) {
  if (arrTech.length === 0) {
    return 'Vazio!';
  }

  arrTech.sort();
  let listaTech = [];

  for (let tecnologia of arrTech) {
    listaTech.push({
      tech: tecnologia,
      name: name,
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
  // seu código aqui
  if (lineA + lineB > lineC || lineA + lineC > lineB || lineB + lineC > lineA) {
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
