import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-traveller-insurance-physical-page",
  templateUrl: "./traveller-insurance-physical-page.component.html",
  styleUrls: ["./traveller-insurance-physical-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravellerInsurancePhysicalPageComponent {}
