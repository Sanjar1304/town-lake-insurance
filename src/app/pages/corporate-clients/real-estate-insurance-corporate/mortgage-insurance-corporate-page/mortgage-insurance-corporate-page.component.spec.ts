import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MortgageInsuranceCorporatePageComponent } from "./mortgage-insurance-corporate-page.component";

describe("MortgageInsuranceComponent", () => {
  let component: MortgageInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<MortgageInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortgageInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageInsuranceCorporatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
