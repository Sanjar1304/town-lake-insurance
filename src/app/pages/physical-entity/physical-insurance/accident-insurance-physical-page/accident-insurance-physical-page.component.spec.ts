import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AccidentInsurancePhysicalPageComponent } from "./accident-insurance-physical-page.component";

describe("AccidentInsuranceComponent", () => {
  let component: AccidentInsurancePhysicalPageComponent;
  let fixture: ComponentFixture<AccidentInsurancePhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AccidentInsurancePhysicalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
