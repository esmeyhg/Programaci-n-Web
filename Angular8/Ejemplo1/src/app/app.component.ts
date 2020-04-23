import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A mi primera aplicación';
  show:boolean = False;
  activo;
  cursos:string[] = ['HTML', 'ANGULAR', 'PHP']

  animales:Array<any> = [
    {tipo:'Perro', nombre:'Lisa', edad:30},
    {tipo:'Gato', nombre:'Pepon', edad:2},
    {tipo:'Pato', nombre:'TanTan', edad:7}
  ]
}
