import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WorkersCollectiveInsuranceAgainstAccidentCorporatePageComponent } from "./workers-collective-insurance-against-accident-corporate-page.component";

describe("WorkersCollectiveInsuranceAgainstAccidentComponent", () => {
  let component: WorkersCollectiveInsuranceAgainstAccidentCorporatePageComponent;
  let fixture: ComponentFixture<WorkersCollectiveInsuranceAgainstAccidentCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WorkersCollectiveInsuranceAgainstAccidentCorporatePageComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      WorkersCollectiveInsuranceAgainstAccidentCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
