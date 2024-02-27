import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-pledged-property-insurance-corporate-page",
  templateUrl: "./pledged-property-insurance-corporate-page.component.html",
  styleUrls: ["./pledged-property-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PledgedPropertyInsuranceCorporatePageComponent {}
