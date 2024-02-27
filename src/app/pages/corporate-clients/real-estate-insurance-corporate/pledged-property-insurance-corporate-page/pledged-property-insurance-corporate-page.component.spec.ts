import { ComponentFixture, TestBed } from "@angular/core/testing";

import { PledgedPropertyInsuranceCorporatePageComponent } from "./pledged-property-insurance-corporate-page.component";

describe("PledgedPropertyInsuranceComponent", () => {
  let component: PledgedPropertyInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<PledgedPropertyInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PledgedPropertyInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      PledgedPropertyInsuranceCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
