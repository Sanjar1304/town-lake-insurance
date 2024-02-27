import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FinancialReportsPageComponent } from "./financial-reports-page.component";

describe("FinancialReportsComponent", () => {
  let component: FinancialReportsPageComponent;
  let fixture: ComponentFixture<FinancialReportsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialReportsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialReportsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
