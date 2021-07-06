class Pizzeria {
    constructor(){
        this.pizzas = [];
    }

    subscribe(pizza) {
        this.pizzas.push(pizza);
    }

    unsubscribe(pizza) {
        this.pizzas = this.pizzas.filter(
            (item) => item !== pizza
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

    addIngrediente(ingrediente){
        console.log(`Pizza ${this.tamano} de ${ingrediente}`);
    }
}


const pizza = new Pizzeria();

const pizzaS = new Tamano('pequeña');
const pizzaM = new Tamano('mediana');
const pizzaL = new Tamano('grande');

pizza.subscribe(pizzaS);
pizza.subscribe(pizzaM);
pizza.notify("piña");

pizza.subscribe(pizzaL);
pizza.unsubscribe(pizzaM);
pizza.notify("pollo con champiñones");

pizza.unsubscribe(pizzaS);
pizza.notify("pepperoni");


