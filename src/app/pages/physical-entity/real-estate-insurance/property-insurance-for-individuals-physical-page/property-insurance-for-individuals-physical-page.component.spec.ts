import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PropertyInsuranceForIndividualsPhysicalPageComponent } from "./property-insurance-for-individuals-physical-page.component";

describe("PropertyInsuranceForIndividualsComponent", () => {
  let component: PropertyInsuranceForIndividualsPhysicalPageComponent;
  let fixture: ComponentFixture<PropertyInsuranceForIndividualsPhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PropertyInsuranceForIndividualsPhysicalPageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
