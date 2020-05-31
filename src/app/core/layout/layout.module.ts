import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from '@app/core/layout/main/main.component';

@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class LayoutModule { }
