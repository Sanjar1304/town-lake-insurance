import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshipProjectsPageComponent } from './sponsorship-projects-page.component';

describe('SponsirshipProjectsComponent', () => {
  let component: SponsorshipProjectsPageComponent;
  let fixture: ComponentFixture<SponsorshipProjectsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SponsorshipProjectsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsorshipProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
