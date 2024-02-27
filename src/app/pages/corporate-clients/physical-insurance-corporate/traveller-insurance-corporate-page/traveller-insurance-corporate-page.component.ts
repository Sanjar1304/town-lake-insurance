import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-traveller-insurance-corporate-page",
  templateUrl: "./traveller-insurance-corporate-page.component.html",
  styleUrls: ["./traveller-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TravellerInsuranceCorporatePageComponent {}
