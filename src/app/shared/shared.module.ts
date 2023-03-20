import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import * as fromComponents from './components';
import { AppLayoutModule } from '../layout/app.layout.module';

// Importaciones Prime Ng
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';

const PRIMENG_MODULES: any = [
  AppLayoutModule,
  CardModule,
  ButtonModule
];

@NgModule({
  declarations: [...fromComponents.Components],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    // Módulos de Prime Ng
    ...PRIMENG_MODULES,
    // Componentes
    ...fromComponents.Components

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    // Módulos de Prime Ng
    ...PRIMENG_MODULES,
    // Componentes
    ...fromComponents.Components
  ]
})
export class SharedModule { }
