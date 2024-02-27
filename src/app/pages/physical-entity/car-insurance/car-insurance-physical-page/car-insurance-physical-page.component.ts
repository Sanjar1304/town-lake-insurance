import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-car-insurance-physical-page",
  templateUrl: "./car-insurance-physical-page.component.html",
  styleUrls: ["./car-insurance-physical-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarInsurancePhysicalPageComponent {}
