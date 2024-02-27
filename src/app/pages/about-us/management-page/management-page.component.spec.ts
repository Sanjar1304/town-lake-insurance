import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPageComponent } from './management-page.component';

describe('ManagementComponent', () => {
  let component: ManagementPageComponent;
  let fixture: ComponentFixture<ManagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ManagementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
