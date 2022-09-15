class RepositorioPessoas {
    constructor() {
        this._pessoas = new Array();
    }
    get pessoas() {
        return this._pessoas;
    }
    adicionar(pessoa) {
        this._pessoas.push(pessoa);
    }
    remover(nome) {
        this._pessoas.splice(this._pessoas.findIndex(pessoa => pessoa.nome === nome), 1);
    }
    pesquisar(nome) {
        return this._pessoas.find(pessoa => pessoa.nome === nome);
    }
}
