import { ComponentFixture, TestBed } from "@angular/core/testing";

import { VehicleOwnersCivilLiabilityInsuranceCorporatePageComponent } from "./vehicle-owners-civil-liability-insurance-corporate-page.component";

describe("VehicleOwnersCivilLiabilityInsuranceComponent", () => {
  let component: VehicleOwnersCivilLiabilityInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<VehicleOwnersCivilLiabilityInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleOwnersCivilLiabilityInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      VehicleOwnersCivilLiabilityInsuranceCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
