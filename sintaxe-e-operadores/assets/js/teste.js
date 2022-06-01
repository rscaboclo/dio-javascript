function sOperadores(a, b) {


    let n1 = a;
    let n2 = b;
    let resultado = n1 + n2;

    if (isNaN(a) || isNaN(b)) {
        return "Digite algum numero!\n";
    }

    if (n1 == n2 && resultado < 10) {
        return `Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é menor que 10 e menor que 20.\n`
    }
    else if (n1 == n2 && resultado > 10 && resultado < 20) {
        return `Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é maior que 10 e menor que 20.\n`
    }
    else if (n1 == n2 && resultado > 20) {
        return `Os números ${n1} e ${n2} são iguais. Sua soma é ${resultado}, que é maior que 10 e maior que 20.\n`
    }
    else if (n1 != n2 && resultado < 10) {
        return `Os números ${n1} e ${n2} não são iguais. Sua soma é ${resultado}, que é menor que 10 e menor que 20.\n`
    }
    else if (n1 != n2 && resultado > 10 && resultado < 20) {
        return `Os números ${n1} e ${n2} não são iguais. Sua soma é ${resultado}, que é maior que 10 e menor que 20.\n`
    }
    else if (n1 != n2 && resultado > 20) {
        return `Os números ${n1} e ${n2} não são iguais. Sua soma é ${resultado}, que é maior que 10 e maior que 20.\n`
    }
}

/* TESTES
console.log(sOperadores());
console.log(sOperadores(-1,-1));
 
console.log(sOperadores(0,0));
console.log(sOperadores(1, 1));
console.log(sOperadores(6, 6));
console.log(sOperadores(11, 11));
console.log(sOperadores(0.6, 0.6));

console.log(sOperadores(1,0));
console.log(sOperadores(0,1));
console.log(sOperadores(4, 5));
console.log(sOperadores(6, 5));
console.log(sOperadores(11, 10));
*/

function comparaNumeros(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        return "Digite algum numero!\n";
    }

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}\n`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    if (compara10) {
        resultado10 = 'maior';
    }

    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = 'não';
        return `Os números ${num1} e ${num1} ${saoIguais} são iguais.`;
    }
    return `Os números ${num1} e ${num1} ${saoIguais}são iguais.`;
}

/* TESTES
console.log(comparaNumeros());
console.log(comparaNumeros(-1, -1));

console.log(comparaNumeros(0, 0));
console.log(comparaNumeros(1, 1));
console.log(comparaNumeros(6, 6));
console.log(comparaNumeros(11, 11));
console.log(comparaNumeros(0.6, 0.6));

console.log(comparaNumeros(0, 1));
console.log(comparaNumeros(1, 0));
console.log(comparaNumeros(1, 2));
console.log(comparaNumeros(4, 5));
console.log(comparaNumeros(11, 10));

*/