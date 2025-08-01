import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiryTaskComponent } from './expiry-task.component';

describe('ExpiryTaskComponent', () => {
  let component: ExpiryTaskComponent;
  let fixture: ComponentFixture<ExpiryTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpiryTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiryTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
