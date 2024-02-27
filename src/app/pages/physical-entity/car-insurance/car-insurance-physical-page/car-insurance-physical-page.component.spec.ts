import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CarInsurancePhysicalPageComponent } from "./car-insurance-physical-page.component";

describe("CarInsuranceComponent", () => {
  let component: CarInsurancePhysicalPageComponent;
  let fixture: ComponentFixture<CarInsurancePhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(CarInsurancePhysicalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
