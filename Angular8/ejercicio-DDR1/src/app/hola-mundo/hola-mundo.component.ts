import { Component } from '@angular/core';

@Component({
    selector: 'hola-mundo',
    templateUrl: './hola-mundo.component.html'
})

export class HolaMundo {
    mensaje: String = '¡Hola mundo! Este es mi primer ejercicio';
}