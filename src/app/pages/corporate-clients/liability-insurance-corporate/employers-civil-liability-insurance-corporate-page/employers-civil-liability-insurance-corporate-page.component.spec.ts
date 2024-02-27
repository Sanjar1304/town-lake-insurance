import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EmployersCivilLiabilityInsuranceCorporatePageComponent } from "./employers-civil-liability-insurance-corporate-page.component";

describe("EmployersCivilLiabilityInsuranceComponent", () => {
  let component: EmployersCivilLiabilityInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<EmployersCivilLiabilityInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployersCivilLiabilityInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EmployersCivilLiabilityInsuranceCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
