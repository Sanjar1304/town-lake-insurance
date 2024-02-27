import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PropertyInsuranceAgainstAllRisksCorporatePageComponent } from "./property-insurance-against-all-risks-corporate-page.component";

describe("PropertyInsuranceAgainstAllRisksComponent", () => {
  let component: PropertyInsuranceAgainstAllRisksCorporatePageComponent;
  let fixture: ComponentFixture<PropertyInsuranceAgainstAllRisksCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyInsuranceAgainstAllRisksCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PropertyInsuranceAgainstAllRisksCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
