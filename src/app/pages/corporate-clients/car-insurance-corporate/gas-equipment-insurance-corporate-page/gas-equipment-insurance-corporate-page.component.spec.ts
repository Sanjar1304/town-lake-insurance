import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GasEquipmentInsuranceCorporatePageComponent } from "./gas-equipment-insurance-corporate-page.component";

describe("GasEquipmentInsuranceComponent", () => {
  let component: GasEquipmentInsuranceCorporatePageComponent;
  let fixture: ComponentFixture<GasEquipmentInsuranceCorporatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GasEquipmentInsuranceCorporatePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      GasEquipmentInsuranceCorporatePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
