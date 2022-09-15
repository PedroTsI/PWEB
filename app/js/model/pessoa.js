class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
        this._contas = new Array();
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento;
    }
    get contas() {
        return this._contas;
    }
    saldoTotalContas() {
        return this._contas.map(conta => {
            return conta.getSaldo();
        }).reduce((saldoAnterior, saldoAtual) => {
            return saldoAnterior + saldoAtual;
        });
    }
    mediaSaldoContas() {
        return this.saldoTotalContas() / this._contas.length;
    }
    acrescentarConta(conta) {
        this._contas.push(conta);
    }
    removerConta(numero) {
        this._contas.splice(this._contas.findIndex(conta => conta.numero === numero), 1);
    }
    pesquisarConta(numero) {
        return this._contas.find(conta => conta.numero === numero);
    }
    toString() {
        return `${this._nome}, ${this._idade}, ${this._dataNascimento}`;
    }
}
