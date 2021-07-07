// Clase Observable, contiene los métodos subscribe, unsubscribe, notify para registrar, eliminar y notificar observadores
class Observable {
    constructor() {
        // Arreglo donde se van a almacenar los elementos que van a observar
        this.observers = [];
    }

    // Método que agrega los observadores al arreglo de observadores
    subscribe(notifyingClass) {
        this.observers.push(notifyingClass);
    }

    // Método que elimina un observador del array observers, para que no pueda seguir observando
    unsubscribe(notifyingClass) {
        this.observers = this.observers.filter(observer => observer instanceof notifyingClass !== true)
    }

    // Método que itera sobre el arreglo observers, para notificarlos sobre el cambio de estado de la clase observada
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
        super(); // Llamar los métodos de la clase Observable
        this.value = 0; // Variable a observar
    }

    // Método que incrementa en 1 la variable a observar
    increment(){
        this.value++;
        this.notifyObservable(this); // Invoca el método para notificar a los observadores sobre el contexto actual de la clase NumberExample
    }
}

// Clase Observadora que contiene el método notify, recibe el parámetro data, y muestra en consola el valor actualizado, que viene de data.value
// Está recibiendo la notificación del estado actual de la clase observada
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

// Creación de objeto de la clase observada
let numberExample = new NumberExample();

// Al objeto de la clase observada se le agrega el observador NumberExSpanish-English
numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

// Al oobjeto de la clase observada se le ejecuta el método increment, que hará reaccionar a los observadores
numberExample.increment();
numberExample.increment(); 