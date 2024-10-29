function Animal(nome, tipo){
    this.nome=nome;
    this.tipo= tipo;
}
    Animal.prototype.emitirSom= function (){
        if(this.tipo == 'cachorro') return 'Au Au';
        if(this.tipo == 'gato') return 'Miau';
        else(this.tipo ===' ');
    };
let belinha  = new Animal('Belinha', 'cachorro');
let pitoco = new Animal('Pitoco', 'gato');
console.log(belinha.emitirSom());
console.log(pitoco.emitirSom());



