import { Pipe, PipeTransform } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(equipos: Array<Equipo>, equipoBuscar: string): Array<Equipo> {
    if (equipoBuscar && equipoBuscar !== '') {
      return equipos.filter(equipo => equipo.nombre.toLowerCase().indexOf(equipoBuscar.toLowerCase()) !== -1);
    } else {
      return equipos;
    }
  }

}
