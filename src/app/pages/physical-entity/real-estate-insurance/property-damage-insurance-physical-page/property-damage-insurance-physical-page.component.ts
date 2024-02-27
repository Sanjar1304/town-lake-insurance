import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-property-damage-insurance-physical-page",
  templateUrl: "./property-damage-insurance-physical-page.component.html",
  styleUrls: ["./property-damage-insurance-physical-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDamageInsurancePhysicalPageComponent {}
