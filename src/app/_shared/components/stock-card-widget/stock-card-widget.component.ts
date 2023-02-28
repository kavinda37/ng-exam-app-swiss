import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Stock } from '../../../stocks/types/stock';

@Component({
  selector: 'shared-stock-card-widget',
  templateUrl: './stock-card-widget.component.html',
  styleUrls: ['./stock-card-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockCardWidgetComponent {

  @Input() stock: Stock | null | undefined;

  constructor() { }

}
