import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CargoInsuranceCorporatePageComponent } from "./cargo-insurance-corporate-page.component";

describe("CargoInsuranceComponent", () => {
  let component: CargoInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<CargoInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargoInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CargoInsuranceCorporatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
