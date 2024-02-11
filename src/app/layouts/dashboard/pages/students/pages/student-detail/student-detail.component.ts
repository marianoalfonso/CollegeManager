import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { StudentsService } from '../../students.service';
import { Student } from '../../../../../models';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {
  constructor(
    private route: ActivatedRoute, 
    private studentsService: StudentsService,
    private loadingService: LoadingService) {


  this.loadingService.setIsLoading(true);
  this.studentsService.getStudentById(this.route.snapshot.params['id']).subscribe({
    next: (findedStudent) => {
      console.log(findedStudent);
    },
    complete: () => this.loadingService.setIsLoading(false)
  })
}
}
