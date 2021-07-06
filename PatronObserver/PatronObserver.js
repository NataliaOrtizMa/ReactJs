// Clase que contiene los métodos subscribe, unsubscribe, notify del Observador
class Observable {
    constructor() {
        // Arreglo que contiene los elementos a ser observados
        this.observers = [];
    }

    // Método que agrega los elementos para que sean observados
    subscribe(notifyingClass) {
        this.observers.push(notifyingClass);
    }

    // Método que elimina un elemento del array observers, para que no sea observado
    unsubscribe(notifyingClass) {
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true)
    }

    // Método que itera sobre el arreglo observers, para notificarlos sobre el cambio de estado
    notifyObservable(data) {
        this.observers.forEach(
            (observer) => {
                observer.notify(data);
            }
        )
    }
}

// Clase que contiene las propiedades del objeto a observar
class NumberExample extends Observable{
    constructor(){
        super();
        this.value = 0; // Variable a observar
    }

    // Método que incrementa en 1 la variable a observar
    increment(){
        this.value++;
        this.notifyObservable(this); // Invoca el método para observar el contexto de la clase NumberExample
    }
}

// Clase que contiene el método notify, recibe el parámetro data, y muestra en consola el valor, que viene de data.value
class NumberExampleSpanish {
    notify(data){
        console.log(`El nuevo número es: ${data.value}`);
    }
}
class NumberExampleEnglish{
    notify(data){
        console.log(`The new number is: ${data.value}`);
    }
}

// Creación de la instancia NumberExample
let numberExample = new NumberExample();

// A la instancia NumberExample se le agrega la clase NumberExampleIdioma, para que sea observable
numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

// Se ejecuta el método increment, que a su vez invoca el notifyObservable sobre cada elemento del arreglo this.observers
numberExample.increment();
numberExample.increment(); 