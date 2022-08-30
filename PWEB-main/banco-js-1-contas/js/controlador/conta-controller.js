class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoTypeConta = document.querySelector('#TipoConta');
        const elementoAniversario = document.querySelector('#dataAniversario')

        let conta;
        switch (elementoTypeConta.value){
            case 'conta':
                conta = new Conta(elementoNumero.value,
                    Number(elementoSaldo.value));
                break
                    
            case 'bonificada':
                conta = new Conta(elementoNumero.value, Number(elementoSaldo.value));
                break
            
            case 'poupanca':
                conta = new Conta(elementoNumero.value, Number(elementoSaldo.value, elementoAniversario.value));
                break
        }
        this.repositorioContas.adicionar(conta);
        this.inserirContaNoHTML(conta);
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
''