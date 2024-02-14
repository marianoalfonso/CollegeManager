import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { Student } from '../../../models';
import { AlertsService } from '../../../../core/services/alerts.service';
import { HttpClient } from '@angular/common/http';
import { LoadChildren } from '@angular/router';
import { LoadingService } from '../../../../core/services/loading.service';

let STUDENTS_DB: Student[] = [];

@Injectable()
export class StudentsService {
  constructor(
    private notifier: AlertsService,
    private httpClient: HttpClient) {}

  // este metodo se comunica con la DB y devuelve un observable con el array de estudiantes
  getStudents() {
    // // {of} es la abreviatura para devolver rapidamente un observable
    // // el pipe delay aplica una demora en la devolucion del observable
    // return of(STUDENTS_DB).pipe(delay(2000));
    return this.httpClient.get<Student[]>('http://localhost:3000/students').pipe(delay(1000)); 
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
