class PessoaFisica extends Pessoa{
    private readonly _cpf: string;
    constructor(nome: string, idade: number, dataNascimento: Date, cpf: string) {
        super(nome, idade, dataNascimento);
        this._cpf = cpf;
    }

    get cpf():string{
        return this._cpf;
    }
    get nome(){
        return this._nome += "-Fisica"
    }
}
