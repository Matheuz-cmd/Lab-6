// Questão 1

console.log('Questão 1:');
function verificarArray(entrada) {
    return Array.isArray(entrada);
}
const input1 = [1, 2, 3];
console.log(verificarArray(input1));

const input2 = "Olá";
console.log(verificarArray(input2));

// Questão 2

console.log('Questão 2:');
function clonarArray(array) {
    return array.slice();
}
const arrayOriginal = [1, 2, 3, 4];
console.log('Array Original = ' + arrayOriginal);
const arrayClone = clonarArray(arrayOriginal);
console.log('Array Clonado = ' + arrayClone);

// Questão 3

console.log('Questão 3:');
function obterElemento(array, n) {
    if (n == undefined) {
        return array[0];
    } else {
        return array.slice(0, n);
    }
}
const array1 = [1, 2, 3, 4, 5, 6];
console.log(obterElemento(array1));
console.log(obterElemento(array1, 5))

// Questão 4

console.log('Questão 4:');
function obterUltimosElementos(array, n) {
    if (n == undefined) {
        return array[array.length - 1]
    } else {
        return array.slice(Math.max(array.length - n, 0))
    }
}
const array2 = [1, 2, 3, 4, 5, 6];
console.log(obterUltimosElementos(array2));
console.log(obterUltimosElementos(array2, 4));

// Questão 5

console.log('Questão 5:');
function arrayUnido(array) {
    return array.join(' ');
}
const array3 = [1, 2, 3, 4, 5, 6];
console.log(arrayUnido(array3));

// Questão 6

console.log('Questão 6:');
function separarPares(numero) {
    let numeroString = numero.toString();
    let resultado = "";

    for (var i = 0; i < numeroString.length; i++) {
        resultado += numeroString[i];

        if (numeroString[i] % 2 === 0 && numeroString[i + 1] % 2 === 0) {
            resultado += "-";
        }
    }

    return resultado;
}

let numero = 025468;
let paresSeparados = separarPares(numero);
console.log(paresSeparados);

// Questão 7

console.log('Questão 7:');
function maisFrequente(array) {
    let itemMaisFrequente = 0;
    let frequenciaMaxima = 0;

    for (let i = 0; i < array.length; i++) {
        let cont = 0;
        cont++;
        for (let j = 1; j < array.length; j++) {
            if (array[j] === array[i]) {
                cont++;
            }
        }
        if (cont > frequenciaMaxima) {
            frequenciaMaxima = cont;
            itemMaisFrequente = array[i];
        }
    }
    return itemMaisFrequente;
}
const arrayFrequente = [1, 2, 3, 3, 5, 6, 3, 5];
let itemMaisFrequente = maisFrequente(arrayFrequente);
console.log(itemMaisFrequente);

// Questão 8

console.log('Questão 8:');
function removerDuplicados(array) {
    let resultado = [];

    for (let i = 0; i < array.length; i++) {
        let itemAtual = array[i].toLowerCase();

        if (resultado.indexOf(itemAtual) === -1) {
            resultado.push(itemAtual);
        }

    }
    return resultado;
}
let estados = ['sp', 'SP', 'sp', 'MG', 'mg', 'PI', 'pi', 'ce', 'ma', 'CE'];
let arraySemDuplicatas = removerDuplicados(estados);
console.log(arraySemDuplicatas);

// Questão 9

console.log('Questão 9:');
function somaArrays(array1, array2) {
    let soma = [];

    for (let i = 0; i < array1.length; i++) {
        soma.push(array1[i] + array2[i]);
    }
    return soma;
}
let arrayUm = [1, 1, 1, 1];
let arrayDois = [2, 2, 2, 2];
let arrayResultado = somaArrays(arrayUm, arrayDois);
console.log(arrayResultado);

// Questão 9

console.log('Questão 9:');
function unirArrays(arrayPilha, arrayAdiciona) {
    let união = arrayPilha.slice();
    for (let i = 0; i < arrayAdiciona.length; i++) {
        união.push(arrayAdiciona[i]);
    }
    return união;
}
let vetorPilha = [1, 2, 3, 4, 5];
let vetorAdiciona = [6, 7, 8, 9, 10];
let uniao = unirArrays(vetorPilha, vetorAdiciona);
console.log(uniao);

