import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CivilLiabilityInsurancePhysicalPageComponent } from "./civil-liability-insurance-physical-page.component";

describe("CivilLiabilityInsuranceComponent", () => {
  let component: CivilLiabilityInsurancePhysicalPageComponent;
  let fixture: ComponentFixture<CivilLiabilityInsurancePhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(
      CivilLiabilityInsurancePhysicalPageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
