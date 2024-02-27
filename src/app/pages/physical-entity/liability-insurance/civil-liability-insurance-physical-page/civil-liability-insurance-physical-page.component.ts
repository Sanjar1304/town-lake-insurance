import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-civil-liability-insurance-physical-page",
  templateUrl: "./civil-liability-insurance-physical-page.component.html",
  styleUrls: ["./civil-liability-insurance-physical-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CivilLiabilityInsurancePhysicalPageComponent {}
