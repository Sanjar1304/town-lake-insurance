import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-gas-equipment-insurance-corporate-page",
  templateUrl: "./gas-equipment-insurance-corporate-page.component.html",
  styleUrls: ["./gas-equipment-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GasEquipmentInsuranceCorporatePageComponent {}
