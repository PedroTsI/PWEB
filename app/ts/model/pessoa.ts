class Pessoa {
    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date;
    private _contas: Array<Conta>;

    constructor(nome: string, idade: number, dataNascimento: Date) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
        this._contas = new Array<Conta>();
    }

    get nome(): string {
      return this._nome;
    }

    set nome(nome: string) {
      this._nome = nome;
    }

    get idade(): number {
      return this._idade;
    }

    set idade(idade: number) {
      this._idade = idade;
    }

    get dataNascimento(): Date {
      return this._dataNascimento;
    }

    set dataNascimento(dataNascimento: Date) {
      this._dataNascimento = dataNascimento;
    }

    get contas(): Array<Conta> {
      return this._contas;
    }

    saldoTotalContas(): number {
        return this._contas.map(conta => {
            return conta.getSaldo();
        }).reduce((saldoAnterior, saldoAtual) => {
            return saldoAnterior + saldoAtual
        });
    }

    mediaSaldoContas(): number {
        return this.saldoTotalContas() / this._contas.length;
    }

    acrescentarConta(conta: Conta) {
        this._contas.push(conta);
    }

    removerConta(numero: string) {
        this._contas.splice(
            this._contas.findIndex(conta => conta.numero === numero),
            1
        );
    }

    pesquisarConta(numero: string): Conta {
        return this._contas.find(conta => conta.numero === numero);
    }

    toString(): string {
      return `${this._nome}, ${this._idade}, ${this._dataNascimento}`;
    }
}
