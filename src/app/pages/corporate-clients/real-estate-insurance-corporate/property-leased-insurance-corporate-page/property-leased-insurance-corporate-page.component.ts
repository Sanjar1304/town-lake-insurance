import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-property-leased-insurance-corporate-page",
  templateUrl: "./property-leased-insurance-corporate-page.component.html",
  styleUrls: ["./property-leased-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyLeasedInsuranceCorporatePageComponent {}
