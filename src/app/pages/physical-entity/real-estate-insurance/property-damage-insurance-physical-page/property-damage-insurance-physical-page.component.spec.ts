import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PropertyDamageInsurancePhysicalPageComponent } from "./property-damage-insurance-physical-page.component";

describe("PropertyDamageInsuranceComponent", () => {
  let component: PropertyDamageInsurancePhysicalPageComponent;
  let fixture: ComponentFixture<PropertyDamageInsurancePhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PropertyDamageInsurancePhysicalPageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
