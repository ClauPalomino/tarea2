import { MatPaginatorImpl } from './../_shared/mat-paginator';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatToolbarModule,MatTableModule, MatPaginatorModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorIntl, MatDialogModule, MatSnackBarModule, MatMenuModule, MatSidenavModule, MatDividerModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule
  ],
   exports :
   [
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule
   ],
   providers:
   [
     { provide: MatPaginatorIntl, useClass: MatPaginatorImpl}
   ]
})
export class MaterialModule { }
