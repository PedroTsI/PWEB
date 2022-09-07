class ClienteEspecial extends Cliente {
    listar() {
        return this.dependentes;
    }
}
