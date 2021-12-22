import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


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

    ]
})

export class AppMaterialModule { }
