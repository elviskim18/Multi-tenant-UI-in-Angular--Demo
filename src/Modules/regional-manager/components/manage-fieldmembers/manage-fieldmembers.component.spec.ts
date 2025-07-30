import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFieldmembersComponent } from './manage-fieldmembers.component';

describe('ManageFieldmembersComponent', () => {
  let component: ManageFieldmembersComponent;
  let fixture: ComponentFixture<ManageFieldmembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageFieldmembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageFieldmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
