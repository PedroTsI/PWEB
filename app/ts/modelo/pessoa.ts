class Pessoa{
   protected _nome: string;
   private _idade: number;
   private _dataNascimento: Date;

   constructor(nome: string, idade: number, dataNascimento: Date) {
      this._nome = nome;
      this._idade = idade;
      this._dataNascimento = dataNascimento;
   }
   get nome(){
      return this._nome;
   }
   set nome(novoNome){
      this._nome = novoNome;
   }
   get idade(){
      return this._idade;
   }
   set idade(novaIdade: number){
      this._idade = novaIdade;
   }get dataNascimento(){
      return this._dataNascimento;
   }
   set dataNascimento(novaData){
      this._dataNascimento = novaData;
   }
}