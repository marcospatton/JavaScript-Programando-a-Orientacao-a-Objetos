import { Cliente} from "./Cliente.js"

export class ContaCorrente{
    agencia;
    _cliente;
    // # Saldo = 0
    _saldo = 0;




    set cliente(novoValor){
        if(novoValor instanceof Cliente){
        this._cliente = novoValor;
    }
}

    get cliente(){
    return this._cliente;
}

    get saldo(){
        return this._saldo;
    }

    construtor(cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;

    }



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
    transferir(valor, conta){
       
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
      
    }
}
