import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-voluntary-health-insurance-corporate-page",
  templateUrl: "./voluntary-health-insurance-corporate-page.component.html",
  styleUrls: ["./voluntary-health-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoluntaryHealthInsuranceCorporatePageComponent {}
