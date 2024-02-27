import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GadgetInsurancePhysicalPageComponent } from "./gadget-insurance-physical-page.component";

describe("GadgetInsuranceComponent", () => {
  let component: GadgetInsurancePhysicalPageComponent;
  let fixture: ComponentFixture<GadgetInsurancePhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(GadgetInsurancePhysicalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
