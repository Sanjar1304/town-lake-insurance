import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CarrierCivilLiabilityCorporatePageComponent } from "./carrier-civil-liability-corporate-page.component";

describe("CarrierCivilLiabilityComponent", () => {
  let component: CarrierCivilLiabilityCorporatePageComponent;
  let fixture: ComponentFixture<CarrierCivilLiabilityCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrierCivilLiabilityCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      CarrierCivilLiabilityCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
