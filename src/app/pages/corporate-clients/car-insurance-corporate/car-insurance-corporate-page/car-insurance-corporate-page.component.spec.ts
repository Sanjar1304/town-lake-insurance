import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CarInsuranceCorporatePageComponent } from "./car-insurance-corporate-page.component";

describe("CarInsuranceComponent", () => {
  let component: CarInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<CarInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarInsuranceCorporatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
