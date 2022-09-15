class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get nome() {
        return this._nome += '-Jurídica';
    }
    get cnpj() {
        return this._cnpj;
    }
    toString() {
        return `${super.toString()}, ${this._cnpj}`;
    }
}
