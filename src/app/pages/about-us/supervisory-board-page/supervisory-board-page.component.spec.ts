import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisoryBoardPageComponent } from './supervisory-board-page.component';

describe('SupervisoryBoardComponent', () => {
  let component: SupervisoryBoardPageComponent;
  let fixture: ComponentFixture<SupervisoryBoardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SupervisoryBoardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisoryBoardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
