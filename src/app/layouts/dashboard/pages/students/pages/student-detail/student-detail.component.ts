import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { StudentsService } from '../../students.service';
import { Student } from '../../../../../models';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {

  estudiante: Student | undefined;

  constructor(
    private route: ActivatedRoute, 
    private studentsService: StudentsService,
    private loadingService: LoadingService) {

  this.loadingService.setIsLoading(true);
  // this.studentsService.getStudentById(this.route.snapshot.params['id']).subscribe({
  //   next: (findedStudent) => {
  //     console.log(findedStudent);
  //   },
  //   complete: () => this.loadingService.setIsLoading(false)
  // })
  this.studentsService.getStudentById(this.route.snapshot.params['id']).subscribe({
    next: (findedStudent) => {
      this.estudiante = findedStudent;
      console.log(findedStudent);
    },
    complete: () => this.loadingService.setIsLoading(false)
  })
}
}
