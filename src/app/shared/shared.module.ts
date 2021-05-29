import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
