import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    exports: [
      MatButtonModule,
      MatIconModule,
      MatToolbarModule,
      FlexLayoutModule,
    ]
})

export class AppMaterialModule { }
