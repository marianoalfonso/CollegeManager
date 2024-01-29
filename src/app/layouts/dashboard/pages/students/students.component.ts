import { Component } from '@angular/core';
import { Student } from '../../../models';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'birthDate'];
  dataSource: Student[] = [
    {
      id: 1,
      firstName: 'Olivia',
      lastName: 'Wilde',
      email: 'olivia.wilde@gmail.com',
      birthDate: '1985-10-08',
    },
    {
      id: 2,
      firstName: 'Tom',
      lastName: 'Cruise',
      email: 'tom.cruise@gmail.com',
      birthDate: '1995-04-04',
    },
    {
      id: 3,
      firstName: 'Ricardo',
      lastName: 'Darin',
      email: 'ricardo.darin@gmail.com',
      birthDate: '2001-01-08',
    },
  ]

  onStudentSubmitted(ev: Student): void {
    this.dataSource = [...this.dataSource, { ...ev, id: new Date().getTime() }]
  }
}
