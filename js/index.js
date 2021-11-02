class cliente{
    nome;
    cpf;
 }

 class contaCorrente{
    agencia;
    // #saldo =0 
    _saldo = 0;

    sacar(valor){
        
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }

    }

    depositar(valor){
        if(valor <= 0){
            return;
        }

        this._saldo += valor;
           
        

    }
}

const cliente1 = new cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new cliente();
cliente2.nome = "Alice";
cliente2.cpf = 222226655;

const contaCorrenteRicardo = new contaCorrente();
contaCorrenteRicardo.agencia = 1001;



contaCorrenteRicardo.depositar( -100);
contaCorrenteRicardo.depositar( 100);
contaCorrenteRicardo.depositar( 100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);
