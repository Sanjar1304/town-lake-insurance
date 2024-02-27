import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-gas-equipment-insurance-physical-page",
  templateUrl: "./gas-equipment-insurance-physical-page.component.html",
  styleUrls: ["./gas-equipment-insurance-physical-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GasEquipmentInsurancePhysicalPageComponent {}
