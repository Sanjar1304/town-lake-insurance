import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AccidentInsuranceCorporatePageComponent } from "./accident-insurance-corporate-page.component";

describe("AccidentInsuranceComponent", () => {
  let component: AccidentInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<AccidentInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccidentInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AccidentInsuranceCorporatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
