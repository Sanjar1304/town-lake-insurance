import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-vehicle-owners-civil-liability-insurance-corporate-page",
  templateUrl:
    "./vehicle-owners-civil-liability-insurance-corporate-page.component.html",
  styleUrls: [
    "./vehicle-owners-civil-liability-insurance-corporate-page.component.scss",
  ],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VehicleOwnersCivilLiabilityInsuranceCorporatePageComponent {}
