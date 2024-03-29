import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { Student } from '../../../models';
import { LoadingService } from '../../../../core/services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  // realizamos la inyeccion por dependencias e inyectamos el servicio student.service.ts
  constructor(
    private studentService: StudentsService,
    private loadingService: LoadingService,
    public dialog: MatDialog
  ) {}

  displayedColumns: string[] = [
    'id',
    'fullName',
    'email',
    'birthDate',
    'actions',
  ];
  dataSource: Student[] = [];

  totalRows: number = 0;
  pageSize: number = 5;
  currentPage: number = 1;

  onPage(ev: PageEvent) {
    this.currentPage = ev.pageIndex + 1;
    this.studentService
      .paginateStudents(this.currentPage, this.pageSize)
      .subscribe({
        next: (paginateResult) => {
          this.totalRows = paginateResult.items;
          this.dataSource = paginateResult.data;
          this.pageSize = ev.pageSize;
          this.currentPage = this.currentPage;
        },
      });
  }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.loadingService.setIsLoading(true);

    // uso el forkJoin para futuras modificaciones
    // donde deba manejar varios observables
    this.studentService.paginateStudents(this.currentPage).subscribe({
      // this.studentService.getStudents().subscribe({
      // el value recibe un array de arrays,
      // donde el primer elemento es el array de Roles y el segundo el de Students
      next: (value) => {
        // this.dataSource = value;
        const paginationResult = value;
        this.totalRows = value.items;
        this.dataSource = value.data;
      },
      error: (err) => {},
      complete: () => this.loadingService.setIsLoading(false),
    });
  }

  onStudentEdited(student: Student) {
    this.dialog
      .open(StudentDialogComponent, { data: student })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.studentService.updateStudent(student.id, result).subscribe({
              next: (students) => (this.dataSource = students.data),
            });
          }
        },
      });
  }

  // cuando reciba el formulario de usuario
  onStudentSubmitted(ev: Student): void {
    // creamos un nuevo array para origen de la tabla de angular material
    this.loadingService.setIsLoading(true);
    this.studentService
      .createStudent({ ...ev, id: new Date().getTime() })
      .subscribe({
        // ...students porque angular material necesita un nuevo array para el refresh
        // de esta manera se dispara el ciclo de deteccion de cambios de a.material
        next: (students) => (this.dataSource = [...students]),
        error: (err) => {},
        complete: () => this.loadingService.setIsLoading(false),
      });
  }

  onStudentDeleted(ev: Student): void {
    if (
      confirm(
        `se eliminará el estudiante: ${ev.lastName}, ¿confirma la operación?`
      )
    ) {
      this.loadingService.setIsLoading(true);
      this.studentService.deleteStudent(ev).subscribe({
        next: (students) => (this.dataSource = [...students]),
        error: (err) => {},
        complete: () => this.loadingService.setIsLoading(false),
      });
    }
  }

  // creacion de nuevo estudiante
  onStudentCreated(): void {
    this.dialog
      .open(StudentDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.studentService.createStudent(result).subscribe({
              next: (students) => (this.dataSource = students),
            });
          }
        },
      });
  }
}
