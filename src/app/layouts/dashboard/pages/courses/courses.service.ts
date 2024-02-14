import { Injectable } from '@angular/core';
import { delay, of, tap } from 'rxjs';
import { AlertsService } from '../../../../core/services/alerts.service';
import { Course } from '../../../models/index';
import { HttpClient } from '@angular/common/http';

let COURSES_DB: Course[] = [];

@Injectable()
export class CoursesService {

  constructor(
    private notifier: AlertsService,
    private httpClient: HttpClient) {}

  getCourses() {
    // return of<Course[]>(COURSES_DB).pipe(delay(1000));
    return this.httpClient.get<Course[]>('http://localhost:3000/courses').pipe(delay(1000));
  }

  createCourse(data: Course) {
    COURSES_DB = [...COURSES_DB, {...data, id: COURSES_DB.length + 1}]; //se crea un nuevo array por angular material
    return this.getCourses();
  }

  deleteCourse(payload: Course) {
    COURSES_DB = COURSES_DB.filter((course) => course.id !== payload.id);
    const mensaje = `curso "${ payload.courseName }" eliminado !!!`;
    return this.getCourses().pipe(tap(() => this.notifier.showSuccess('courses', mensaje)));
  }
 
  editCourse(payload: Course) {
    
  }


  updateCourse(id: number, payload: Course) {
    // con MAP recorro el array hasta encontrar el id que quiero y lo actualizo
    // si el id coincide, piso elemento, sino dejo el elemento como esta
    COURSES_DB = COURSES_DB.map((elemento) => (elemento.id === id ? {...elemento, ...payload} : elemento));
    return this.getCourses();
  }

}
