import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRegionalManagersComponent } from './manage-regional-managers.component';

describe('ManageRegionalManagersComponent', () => {
  let component: ManageRegionalManagersComponent;
  let fixture: ComponentFixture<ManageRegionalManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageRegionalManagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRegionalManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
