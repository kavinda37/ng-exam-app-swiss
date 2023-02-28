import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatCommonModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { StockCardWidgetComponent } from './components/stock-card-widget/stock-card-widget.component';



@NgModule({
  declarations: [
    StockCardWidgetComponent
  ],
  imports: [
    CommonModule,
    MatCommonModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule
  ],
  exports: [StockCardWidgetComponent]
})
export class SharedModule { }
