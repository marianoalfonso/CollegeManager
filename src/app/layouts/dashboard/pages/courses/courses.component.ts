import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { LoadChildren } from '@angular/router';
import { LoadingService } from '../../../../core/services/loading.service';
import { Course } from '../../../models';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CoursesService } from './courses.service';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  displayedColumns: string[] = ['id', 'courseName', 'startDate', 'actions'];
  dataSource: Course[] = [];

  totalRows: number = 0;
  pageSize: number = 5;
  currentPage: number = 1;

  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    public dialog: MatDialog) {
      this.loadingService.setIsLoading(true);
      // this.coursesService.getCourses().subscribe({
      this.coursesService.paginateCourses(this.currentPage).subscribe({
        next: (courses) => {
          // this.dataSource = courses,
          const paginationResult = courses;
          this.totalRows = paginationResult.items;
          this.dataSource = paginationResult.data;
        },
        complete: () => this.loadingService.setIsLoading(false)
      });
  }

  onPage(ev: PageEvent) {
      // esto es porque la pagina 1 es el index 0 para angular material
      this.currentPage = ev.pageIndex + 1;
      this.coursesService.paginateCourses(this.currentPage, ev.pageSize).subscribe({
        next: (paginateResult) => {
            this.totalRows = paginateResult.items;
            this.dataSource = paginateResult.data;
            this.pageSize = ev.pageSize;
            this.currentPage = this.currentPage;
        }
      })
  }

  onCourseCreated(): void {
    this.dialog.open(CourseDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if(result) {  //si hay resultados, entonces ...
          this.coursesService.createCourse(result).subscribe({
            next: (courses) => this.dataSource = courses,
          })
        }
      }
    });
  }

  onCourseEdited(course: Course) {
    // abrimos el mismo Dialogo, pero le enviamos data del producto en edicion
    this.dialog.open(CourseDialogComponent, { //abro el formulario modal
      data: course, //envio la data a editar
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.coursesService.editCourse(course.id, result).subscribe({
            next: (courses) => this.dataSource = courses.data,
          });
        }
      }
    })
  }

  onCourseDeleted(ev: Course): void {
      if(confirm(`se eliminará el curso: ${ ev.courseName }, ¿confirma la operacion?`)) {
      this.loadingService.setIsLoading(true);
      this.coursesService.deleteCourse(ev).subscribe({
        next: (courses) => this.dataSource = [...courses],
        error: () => {},
        complete: () => this.loadingService.setIsLoading(false)
      });
    }
  }


}
