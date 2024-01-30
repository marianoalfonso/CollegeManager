import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {

  //FormGroups: agrupar controles y crear objetos
  //Formcontrol: definicion de un control
  //FormArray: agrupar controles y crear arrays
  courseForm: FormGroup;

  constructor (private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      category: this.fb.control('', Validators.required),
      courses: this.fb.array([]),

    })
  }

  // le otorgamos asercion al return indicando que es un FormArray
  // caso contrario lo toma como un Abstract
  get coursesControl() {
    return this.courseForm.get('courses') as FormArray;
  }

  // obtenemos el control dentro del array por su index
  getControl(index: number) {
    return this.coursesControl.controls[index]?.get('courseName') as FormControl;
  }

  onAddProduct():void {
    const formArray = this.courseForm.get('courses');
    if(formArray instanceof FormArray) {
      formArray.push(
        this.fb.group({
          courseName: this.fb.control(''),
        })
      )
    }
  }

  deleteControl(index: number) {
    this.coursesControl.removeAt(index);
  }

}
