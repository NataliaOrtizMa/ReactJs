class Periodico {
    constructor(){
        this.suscriptores = []
    }

    subscribe(suscriptor) {
        this.suscriptores.push(suscriptor);
    }

    unsubscribe(suscriptor) {
        this.suscriptores = this.suscriptores.filter(
            (item) => item !== suscriptor
        );
    }

    notify(event) {
        this.suscriptores.forEach(suscriptor => {
            suscriptor.buzon.call(suscriptor, event);
        });
    }
}

class Suscriptor {
    constructor(id){
        this.id = id;
        console.log(`Se ha creado el suscriptor #${id}`);
    }

    buzon(edicion){
        console.log(`El suscriptor #${this.id} recibió una nueva edición: ${edicion}`);
    }
}

const periodico = new Periodico();
const suscriptor1 = new Suscriptor(1);
const suscriptor2 = new Suscriptor(2);
const suscriptor3 = new Suscriptor(3);

console.log("--- Primera edición ---");

periodico.subscribe(suscriptor1);
periodico.subscribe(suscriptor2);
periodico.notify("Primera edición");

console.log("--- Segunda edición ---");

periodico.subscribe(suscriptor3);
periodico.notify("Segunda edición");

console.log("--- Tercera edición ---");
periodico.unsubscribe(suscriptor1);
periodico.notify("Tercera edición")