import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TravellerInsurancePhysicalPageComponent } from "./traveller-insurance-physical-page.component";

describe("TravellerInsuranceComponent", () => {
  let component: TravellerInsurancePhysicalPageComponent;
  let fixture: ComponentFixture<TravellerInsurancePhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TravellerInsurancePhysicalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
