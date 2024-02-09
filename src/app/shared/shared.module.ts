import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { ResaltadoDirective } from './resaltado.directive';

// importaciones comunes de angular material
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    FullNamePipe,

    ResaltadoDirective,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    
  ],
  exports: [
    FullNamePipe,
    ResaltadoDirective,
  ]
})
export class SharedModule { }
