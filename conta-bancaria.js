function ContaBancaria (titular, numeroConta, saldo){
this.titular = titular;
this.numeroConta = numeroConta;
this.saldo = 0;
};
ContaBancaria.prototype.depositar = function(valor){
    this.saldo += valor;
    return this.saldo;
};
ContaBancaria.prototype.sacar = function(valor){
    //subtrai o valor do saldo se houver saldo suficiente; caso contrario, exibe uma mensagem de erro;
    if(valor>=this.saldo ){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    };
    this.saldo -= valor;
   console.log(`Saque de ${valor} realizado. Saldo restante: ${this.saldo}`);
   return this.saldo;
};
ContaBancaria.prototype.mostrarSaldo = function(){
    return this.saldo;
};

let conta1 = new ContaBancaria ('Ana','123');
console.log(conta1.depositar(1000));
console.log(conta1.sacar(500));
console.log(conta1.mostrarSaldo());