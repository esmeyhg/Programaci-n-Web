import { Component } from "@angular/core";


@Component ({
    selector: 'mostrar-ocultar',
    templateUrl: './mostrar-ocultar.component.html'
})

export class MostrarOcultar {

    mostrar: Boolean = false;
    mensaje: String = 'Hola, me estas leyendo';
    mensaje_enlace: String = 'Mostrar';

    mostrarOcultar() {

        if (this.mostrar) {
            this.mostrar = false;
            this.mensaje_enlace = 'Mostrar';
        } else {
            this.mostrar = true;
            this.mensaje_enlace = 'Ocultar';
        }
    }

}