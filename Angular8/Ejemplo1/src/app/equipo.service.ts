import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[] = [
    {
      nombre:'Ingacio',
      especialidad:'HTML',
      descripcion:'Nulla ultrices ullamcorper massa, id hendrerit dolor.'
    },
    {
      nombre:'Maria',
      especialidad:'CSS',
      descripcion:'Nulla ultrices ullamcorper massa, id hendrerit dolor.'
    }
  ]

  constructor() {
    console.log('funcionando servicio')
   }

   obtenerEquipo() {
     return this.equipo;
   }

   obtenerUno(i) {
     return this.equipo[i];
   }
}
