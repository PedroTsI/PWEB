const c1 = new Conta('1', 100);
const c2 = new Conta('2');


console.log(c1.numero);
const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.getSaldo());

const p1 = new PessoaFisica("Joao", 19, new Date("23-03-2000"), "12312312345");
const p2 = new PessoaJuridica("Marcos", 24, new Date("03/04/1978"), "12345423");
console.log(p1.nome);
console.log(p1.cpf);
console.log(p1.dataNascimento);
console.log(p1.idade);
console.log(p2.nome);
console.log(p2.cnpj);
console.log(p2.dataNascimento);
console.log(p2.idade);