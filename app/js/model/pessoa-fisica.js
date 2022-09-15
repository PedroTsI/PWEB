class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
    }
    get nome() {
        return this._nome += '-Física';
    }
    get cpf() {
        return this._cpf;
    }
    toString() {
        return `${super.toString()}, ${this._cpf}`;
    }
}
