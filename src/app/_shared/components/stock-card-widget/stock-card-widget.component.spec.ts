import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCardWidgetComponent } from './stock-card-widget.component';

describe('StockCardWidgetComponent', () => {
  let component: StockCardWidgetComponent;
  let fixture: ComponentFixture<StockCardWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockCardWidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockCardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
