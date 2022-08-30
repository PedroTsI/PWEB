class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        super(numero, saldo);
        this.dataAniversario = dataAniversario
    }

    incrementarPoupanca(dataAniversario){
        this.creditar(valor*1.05)
}
}