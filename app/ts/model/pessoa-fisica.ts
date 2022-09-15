class PessoaFisica extends Pessoa {
    private readonly _cpf: string;
    
    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
    }

    get nome(): string {
        return this._nome += '-Física';
    }

    get cpf(): string {
        return this._cpf;
    }

    toString(): string {
        return `${super.toString()}, ${this._cpf}`;
    }
}
