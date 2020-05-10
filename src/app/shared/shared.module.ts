import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EssentialDirective } from './directives/essential.directive';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [],
  declarations: [EssentialDirective],
  exports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    EssentialDirective,
  ],
})
export class SharedModule {}
