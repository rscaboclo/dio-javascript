//Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
class Conta {

    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    };

    //Dentro de ContaBancaria, construa o getter e o setter de saldo;
    get saldo() {
        return this._saldo;
    };

    set saldo(valor) {
        return this._saldo = valor;
    };

    //Dentro de ContaBancaria, crie os métodos sacar e depositar;
    sacar(valor) {
        if (this._saldo < valor) return "Operação negada!"

        return this._saldo = this._saldo - valor;
    };

    depositar(valor) {
        return this._saldo = this._saldo + valor;
    };

};

//Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
//Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
//Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
class ContaCorrente extends Conta {
    constructor(agencia, numero, tipo, cartaoCredito) {
        super(agencia, numero, tipo);
        this.tipo = "Conta Corrente";
        this._cartaoCredito = cartaoCredito;
    };

    get cartaoCredito() {
        return this._cartaoCredito;
    };

    set cartaoCredito(valor) {
        return this._cartaoCredito = valor;
    };

};

//Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
class ContaPoupanca extends Conta {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = "Conta Poupança";
    };
}

//Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
//Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
class ContaUniversitaria extends Conta {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Conta Universitária';
    };

    sacar(valor) {
        if (valor > 500) {
            return 'Operação negada.';
        }

        return this._saldo = this._saldo - valor;

    };
};