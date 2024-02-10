import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Course } from '../../../models/index';

let COURSES_DB: Course[] = [
  {
    id: 1,
    courseName: 'algoritmos I',
    startDate: new Date(),
  },
  {
    id: 2,
    courseName: 'algebra I',
    startDate: new Date(),
  },
  {
    id: 3,
    courseName: 'pensamiento critico',
    startDate: new Date(),
  },
  {
    id: 4,
    courseName: 'programacion I',
    startDate: new Date(),
  },
]

@Injectable()
export class CoursesService {

  constructor() {}

  getCourses() {
    return of<Course[]>(COURSES_DB).pipe(delay(2000));
  }
}
