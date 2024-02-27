import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PropertyLeasedInsuranceCorporatePageComponent } from "./property-leased-insurance-corporate-page.component";

describe("PropertyLeasedInsuranceComponent", () => {
  let component: PropertyLeasedInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<PropertyLeasedInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyLeasedInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PropertyLeasedInsuranceCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
