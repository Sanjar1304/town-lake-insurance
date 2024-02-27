import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InfectiousDiseaseInsuranceCorporatePageComponent } from "./infectious-disease-insurance-corporate-page.component";

describe("InfectiousDiseaseInsuranceComponent", () => {
  let component: InfectiousDiseaseInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<InfectiousDiseaseInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfectiousDiseaseInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      InfectiousDiseaseInsuranceCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
