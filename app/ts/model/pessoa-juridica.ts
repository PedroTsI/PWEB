class PessoaJuridica extends Pessoa {
    private readonly _cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
    }

    get nome(): string {
        return this._nome += '-Jurídica';
    }

    get cnpj(): string {
        return this._cnpj;
    }

    toString(): string {
        return `${super.toString()}, ${this._cnpj}`;
    }
}
