// Isso é um comentario em linha.

/**
 *
 * Isso é um comentario em bloco
 * Isso é um comentario em bloco
 *
 */

// Tipos de valores de dados (string, number, boolean)

let nome = "Jhonatan";
let sobreNome = "Pacheco";
let idade = 33;
let branco = true;

// Concatenação de string e variaveis

console.log(
  "Concanetando variaveis: " +
    "Meu nome é: " +
    nome +
    " e minha idade é: " +
    idade
);

// Concatenação de strings, template string

console.log(
  `Concanetando variaveis template string: Meu nome é: ${nome} e minha idade é: ${idade} `
);

// Usando operadores aritmeticos (+, -, /, *)
let numero = 100;
let numero2 = 4;

let soma = numero + numero2;
let subtrair = numero - numero2;
let divisao = numero / numero2;
let multiplicacao = numero * numero2;

console.log(`Soma de valores ${numero} + ${numero2} = ${soma}`);
console.log(`Subtracao de valores ${numero} - ${numero2} = ${subtrair}`);
console.log(`Divisão de valores ${numero} / ${numero2} = ${divisao}`);
console.log(
  `Multiplicação de valores ${numero} * ${numero2} = ${multiplicacao}`
);

// Operadores de atribuição (=, == ,===)
let valor = 1;
let valor2 = "1";

if (valor === valor2) {
  console.log("Valor iguais");
} else {
  console.log("Valores não são iguais");
}

// Operadores condicionais (if, else, switch)

let timeA = 10;
let timeB = 8;

if (timeA >= 10) {
  console.log("TimeA foi clafissicado");
} else {
  console.log("TimeA não foi classificado");
}

// Usando loops while
let total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);
