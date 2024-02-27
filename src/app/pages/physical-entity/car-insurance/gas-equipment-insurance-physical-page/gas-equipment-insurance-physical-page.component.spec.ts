import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GasEquipmentInsurancePhysicalPageComponent } from "./gas-equipment-insurance-physical-page.component";

describe("GasEquipmentInsuranceComponent", () => {
  let component: GasEquipmentInsurancePhysicalPageComponent;
  let fixture: ComponentFixture<GasEquipmentInsurancePhysicalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
    }).compileComponents();

    fixture = TestBed.createComponent(
      GasEquipmentInsurancePhysicalPageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
