import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-employers-civil-liability-insurance-corporate-page",
  templateUrl:
    "./employers-civil-liability-insurance-corporate-page.component.html",
  styleUrls: [
    "./employers-civil-liability-insurance-corporate-page.component.scss",
  ],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployersCivilLiabilityInsuranceCorporatePageComponent {}
