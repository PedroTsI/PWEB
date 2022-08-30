class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo, dataAniversario);
    }

    incrementarPoupanca(dataAniversario){
        this.creditar(valor*1.05)
}
}