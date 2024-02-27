import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSurveyPageComponent } from './social-survey-page.component';

describe('SocialSurveyComponent', () => {
  let component: SocialSurveyPageComponent;
  let fixture: ComponentFixture<SocialSurveyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SocialSurveyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialSurveyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
