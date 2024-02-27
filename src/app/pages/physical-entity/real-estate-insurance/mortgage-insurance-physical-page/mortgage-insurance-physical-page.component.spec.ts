import { ComponentFixture, TestBed } from "@angular/core/testing";

import { MortgageInsurancePhysicalPageComponent } from "./mortgage-insurance-physical-page.component";

describe("MortgageInsuranceComponent", () => {
  let component: MortgageInsurancePhysicalPageComponent;
  let fixture: ComponentFixture<MortgageInsurancePhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageInsurancePhysicalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
