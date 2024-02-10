import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { ResaltadoDirective } from './resaltado.directive';

// importaciones comunes de angular material (solo se expone en el array de exports)
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FullNamePipe,
    ResaltadoDirective,
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    FullNamePipe,
    ResaltadoDirective,
    MatTableModule,
    MatButtonModule,
  ]
})
export class SharedModule { }
