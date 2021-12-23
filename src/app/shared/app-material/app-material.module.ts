import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeModule } from '@angular/material/tree';
import {MatSelectModule} from '@angular/material/select';






@NgModule({
    exports: [
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      FlexLayoutModule,
      MatInputModule,
      MatTableModule,
      MatPaginatorModule,
      MatSortModule,
      ReactiveFormsModule, // Testar tirar
      MatFormFieldModule, // Testar tirar
      FormsModule,  // Testar tirar
      MatCardModule, // Testar tirar 2
      MatDialogModule, // Testar tirar 2
      MatDividerModule, // Testar tirar 2
      MatMenuModule, // Testar tirar 2
      MatProgressSpinnerModule, // Testar tirar 2
      MatSidenavModule, // Testar tirar 2
      MatTreeModule, // Testar tirar 2
      MatSelectModule, // Testar tirar 2
    ]
})

export class AppMaterialModule { }
