import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    public dialog: MatDialog) {
      this.loadingService.setIsLoading(true);
      this.coursesService.getCourses().subscribe({
        next: (courses) => 
          this.dataSource = courses,
        complete: () => this.loadingService.setIsLoading(false)
      });
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
          this.coursesService.updateCourse(course.id, result).subscribe({
            next: (courses) => {
              this.dataSource = courses;
            }
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
