import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'validationErrors'
})
export class ValidationErrorsPipe implements PipeTransform {

  transform(errors?: ValidationErrors | null, ...args: unknown[]): unknown {
    if(!!errors) {
      // creamos un array de mensajes para gestionar mas de un error por control
      let messages = [];


      if(errors['required']) messages.push('dato requerido');
      if(errors['email']) messages.push('email no valido');
      return messages.join('. '); 
    }

    return null;
  }

}
