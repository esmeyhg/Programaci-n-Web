import { Component } from "@angular/core";


@Component({
    selector: 'nombres',
    templateUrl: './nombres.component.html'
})

export class Nombres {

    nombres: String[];

    constructor() {

        this.nombres = [];
    }

    anadirNombre(nombre: String) {
        this.nombres.push(nombre);
        console.log('Se ha añadido el nombre ' + nombre);
    }
}

