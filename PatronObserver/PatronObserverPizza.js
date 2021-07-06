class Pizzeria {
    constructor(){
        this.pizzas = [];
    }

    subscribe(pizza) {
        this.pizzas.push(pizza);
    }

    unsubscribe(pizza) {
        this.ingredientes = this.pizzas.filter(
            item => item instanceof pizza !== true
        );
    }

    notify(event) {
        this.pizzas.forEach(
            (item) => {
                item.addIngrediente(event)
            }
        )
    }
}

class Tamano extends Pizzeria {
    constructor(tamano){
        super();
        this.tamano = tamano;
        this.orden = 0;
    }

    // size(tamano) {
    //     switch (tamano) {
    //         case 1:
    //             size = 'pequeña'
    //             break;
    //         case 2:
    //             size = 'mediana'
    //             break;
    //         case 3:
    //             size = 'grande'
    //             break;
    //         default:
    //             break;
    //     }
    //     return size
    // }

    addIngrediente(ingrediente){
        console.log(`Pizza ${this.tamano} de ${ingrediente}`);
    }
}


const pizza = new Pizzeria();

pizza.subscribe(new Tamano('mediana'))
pizza.subscribe(new Tamano('pequeña'))
pizza.notify("piña");

pizza.subscribe(new Tamano('grande'))
pizza.notify("pollo con champiñones");

pizza.subscribe(new Tamano('pequeña'))
pizza.notify("pepperoni");


