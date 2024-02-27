import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-property-insurance-against-all-risks-corporate-page",
  templateUrl:
    "./property-insurance-against-all-risks-corporate-page.component.html",
  styleUrls: [
    "./property-insurance-against-all-risks-corporate-page.component.scss",
  ],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyInsuranceAgainstAllRisksCorporatePageComponent {}
