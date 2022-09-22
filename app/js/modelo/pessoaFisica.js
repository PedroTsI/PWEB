class PessoaFisica extends Pessoa {
    _cpf;
    constructor(nome, idade, dataNascimento, cpf) {
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    get nome() {
        return this._nome += "-Fisica";
    }
}
