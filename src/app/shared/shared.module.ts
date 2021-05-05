import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '@shared/angular-material.module';
import { NumFilterPipe } from './pipes/num-filter.pipe';

const shared =[
  FormsModule,
  AngularMaterialModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    NumFilterPipe
  ],
  imports: [
    CommonModule,
    ...shared
  ],
  exports: [
    ...shared,
    NumFilterPipe
  ]
})
export class SharedModule { }
