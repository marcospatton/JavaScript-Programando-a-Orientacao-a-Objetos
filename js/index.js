class cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new cliente();
const cliente2 = new cliente();
const cliente3 = new cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;
cliente1.agencia = "1001";
cliente1.saldo = 0;
cliente1.rg = 123456789;

cliente2.nome = "Alice";
cliente2.cpf = 222226655;
cliente2.agencia = 1001;
cliente2.saldo = 0;

cliente3.nome = "Amanda";
cliente3.cpf = 222226655;
cliente3.agencia = 1001;
cliente3.saldo = 0;

console.log(cliente1, cliente2, cliente3);