import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Student } from '../../../models';
import { AlertsService } from '../../../../core/services/alerts.service';

let STUDENTS_DB: Student[] = [
  {
    id: 1,
    firstName: 'Mendez',
    lastName: 'Rosales',
    email: 'mendezrosales@frosnex.com',
    birthDate: '1975-08-11',
  },
  {
    id: 2,
    firstName: 'Ballard',
    lastName: 'Booth',
    email: 'ballardbooth@frosnex.com',
    birthDate: '1983-09-10',
  },
  {
    id: 3,
    firstName: 'Irwin',
    lastName: 'Farley',
    email: 'irwinfarleya@frosnex.com',
    birthDate: '1997-03-13',
  },
];

@Injectable()
export class StudentsService {
  constructor(private notifier: AlertsService) {}

  // este metodo se comunica con la DB y devuelve un observable con el array de estudiantes
  getStudents() {
    console.log('students fetched from real DB');
    // {of} es la abreviatura para devolver rapidamente un observable
    // el pipe delay aplica una demora en la devolucion del observable
    return of(STUDENTS_DB).pipe(delay(2000));
  }

  // agrego un estudiante al array y devuelvo la funcion getStudents
  createStudent(payload: Student) {
    STUDENTS_DB.push(payload);
    return this.getStudents();
  }

  deleteStudent(payload: Student) {
    // recibo el objeto User completo para poder obtener el nombre
    // filtro y me quedo con los que sean diferentes al userID recibido
    STUDENTS_DB = STUDENTS_DB.filter((student) => student.id !== payload.id);
    // tap, con el pipe y el tap le indicamos que haga algo inmediatamente
    // despues que el observable emita un valor
    const mensaje = `estudiante "${payload.lastName}" eliminado correctamente`;
    return this.getStudents().pipe(
      tap(() => this.notifier.showSuccess('estudiantes', mensaje))
    );
  }

  // me devuelve un observable del tipo User
  getStudentById(id: number | string): Observable<Student | undefined> {
    return of(STUDENTS_DB.find((student) => student.id == id)).pipe(
      delay(2000)
    );
  }
}
