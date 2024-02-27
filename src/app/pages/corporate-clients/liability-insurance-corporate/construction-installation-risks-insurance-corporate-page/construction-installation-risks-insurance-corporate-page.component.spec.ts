import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ConstructionInstallationRisksInsuranceCorporatePageComponent } from "./construction-installation-risks-insurance-corporate-page.component";

describe("ConstructionInstallationRisksInsuranceComponent", () => {
  let component: ConstructionInstallationRisksInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<ConstructionInstallationRisksInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstructionInstallationRisksInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ConstructionInstallationRisksInsuranceCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
