class PessoaJuridica extends Pessoa{
    private readonly _cnpj: string;
    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super(nome, idade, dataNascimento);
        this._cnpj = cnpj;
    }

    get cnpj():string{
        return this._cnpj;
    }
    get nome(){
        return this._nome += "-Juridica"
    }
}
