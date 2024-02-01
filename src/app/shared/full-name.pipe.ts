import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../layouts/models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(
    value: Student, 
    mode: 'nombrePropio' | 'cadena',
    ...args: unknown[]): unknown {

    if (mode === 'nombrePropio') {
      //si es nombre propio, capitaliza el apellido y nombre y agrega una coma y espacio
      //si es una cadena, agrega un espacio
      return value.lastName[0].toUpperCase() + value.lastName.substring(1) + ', ' + value.firstName[0].toUpperCase() + value.firstName.substring(1)
    } else {
      return value.lastName + ' ' + value.firstName
    }
  }

}
