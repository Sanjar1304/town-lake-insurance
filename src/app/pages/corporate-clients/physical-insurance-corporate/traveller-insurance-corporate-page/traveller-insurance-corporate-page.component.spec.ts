import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TravellerInsuranceCorporatePageComponent } from "./traveller-insurance-corporate-page.component";

describe("TravellerInsuranceComponent", () => {
  let component: TravellerInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<TravellerInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravellerInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TravellerInsuranceCorporatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
