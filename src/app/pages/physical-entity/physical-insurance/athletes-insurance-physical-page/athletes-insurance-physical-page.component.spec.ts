import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AthletesInsurancePhysicalPageComponent } from "./athletes-insurance-physical-page.component";

describe("AthletesInsuranceComponent", () => {
  let component: AthletesInsurancePhysicalPageComponent;
  let fixture: ComponentFixture<AthletesInsurancePhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(AthletesInsurancePhysicalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
