import { ComponentFixture, TestBed } from "@angular/core/testing";

import { InfectiousDiseaseInsurancePhysicalPageComponent } from "./infectious-disease-insurance-physical-page.component";

describe("InfectiousDiseaseInsuranceComponent", () => {
  let component: InfectiousDiseaseInsurancePhysicalPageComponent;
  let fixture: ComponentFixture<InfectiousDiseaseInsurancePhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(
      InfectiousDiseaseInsurancePhysicalPageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
