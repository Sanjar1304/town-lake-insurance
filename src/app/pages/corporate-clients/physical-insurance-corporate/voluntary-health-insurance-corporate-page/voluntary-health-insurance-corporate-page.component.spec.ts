import { ComponentFixture, TestBed } from "@angular/core/testing";

import { VoluntaryHealthInsuranceCorporatePageComponent } from "./voluntary-health-insurance-corporate-page.component";

describe("VoluntaryHealthInsuranceComponent", () => {
  let component: VoluntaryHealthInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<VoluntaryHealthInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoluntaryHealthInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      VoluntaryHealthInsuranceCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
