import { Component } from '@angular/core';
import { LoadChildren } from '@angular/router';
import { LoadingService } from '../../../../core/services/loading.service';
import { Course } from '../../../models';
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
    private loadingService: LoadingService) {
    this.loadingService.setIsLoading(true);
    this.coursesService.getCourses().subscribe({
      next: (courses) => this.dataSource = courses,
      complete: () => this.loadingService.setIsLoading(false)
    });


  }

}
