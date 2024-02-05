import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../../core/services/students.service';
import { Student } from '../../../models';
import { forkJoin } from 'rxjs';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent implements OnInit {

  // realizamos la inyeccion por dependencias e inyectamos el servicio student.service.ts
  constructor(
    private studentService: StudentsService,
    private loadingService: LoadingService) {}

    displayedColumns: string[] = ['id', 'fullName', 'email', 'birthDate', 'actions'];
    dataSource: Student[] = [];

    ngOnInit(): void {
      this.getPageData();
    }

    // getPageData(): void {
    //   this.loadingService.setIsLoading(true);
  
    //   // uso el forkJoin para futuras modificaciones
    //   // donde deba manejar varios observables
    //   forkJoin([
    //     this.studentService.getStudents()
    //   ]).subscribe({
    //     // el value recibe un array de arrays,
    //     // donde el primer elemento es el array de Roles y el segundo el de Students 
    //     next: (value) => {
    //       this.dataSource = value[0];
    //     },
    //     error: (err) => [],
    //     complete: () => this.loadingService.setIsLoading(false)
    //   })
    // }

    getPageData(): void {
      this.loadingService.setIsLoading(true);
  
      // uso el forkJoin para futuras modificaciones
      // donde deba manejar varios observables
      
        this.studentService.getStudents().subscribe({
        // el value recibe un array de arrays,
        // donde el primer elemento es el array de Roles y el segundo el de Students 
        next: (value) => {
          this.dataSource = value;
        },
        error: (err) => {},
        complete: () => this.loadingService.setIsLoading(false)
      })
    }

  // cuando reciba el formulario de usuario
  onStudentSubmitted(ev: Student): void {
    // creamos un nuevo array para origen de la tabla de angular material
    this.loadingService.setIsLoading(true);
    this.studentService.createStudent({ ...ev, id: new Date().getTime() }).subscribe({
      // ...students porque angular material necesita un nuevo array para el refresh
      // de esta manera se dispara el ciclo de deteccion de cambios de a.material
      next: (students) => this.dataSource = [...students], 
      error: (err) => {},
      complete: () => this.loadingService.setIsLoading(false)
    });
  }

  onStudentDeleted(ev: Student): void {
    this.loadingService.setIsLoading(true);
    this.studentService.deleteStudent(ev).subscribe({
      next: (students) => this.dataSource = [...students], 
      error: (err) => {},
      complete: () => this.loadingService.setIsLoading(false)
    })
  }

}
