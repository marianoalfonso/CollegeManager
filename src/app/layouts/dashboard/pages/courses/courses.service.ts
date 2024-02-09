import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../../../models/index';

@Injectable()
export class CoursesService {

  constructor() {}

  getProducts() {
    return of<Product[]>([])
  }
}
