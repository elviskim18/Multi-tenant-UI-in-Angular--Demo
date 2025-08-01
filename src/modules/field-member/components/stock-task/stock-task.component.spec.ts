import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTaskComponent } from './stock-task.component';

describe('StockTaskComponent', () => {
  let component: StockTaskComponent;
  let fixture: ComponentFixture<StockTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
