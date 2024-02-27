import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AthletesInsuranceCorporatePageComponent } from "./athletes-insurance-corporate-page.component";

describe("AthletesInsuranceComponent", () => {
  let component: AthletesInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<AthletesInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AthletesInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AthletesInsuranceCorporatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
