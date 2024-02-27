import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksMissionValuesPageComponent } from './tasks-mission-values-page.component';

describe('TasksMissionValuesComponent', () => {
  let component: TasksMissionValuesPageComponent;
  let fixture: ComponentFixture<TasksMissionValuesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TasksMissionValuesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksMissionValuesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
