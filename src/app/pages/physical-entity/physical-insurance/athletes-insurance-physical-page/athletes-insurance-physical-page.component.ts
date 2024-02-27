import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-athletes-insurance-physical-page",
  templateUrl: "./athletes-insurance-physical-page.component.html",
  styleUrls: ["./athletes-insurance-physical-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AthletesInsurancePhysicalPageComponent {}
