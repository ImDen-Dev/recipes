import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [MaterialModule, CommonModule, FlexLayoutModule],
  exports: [MaterialModule, CommonModule, FlexLayoutModule],
})
export class SharedModule {}
