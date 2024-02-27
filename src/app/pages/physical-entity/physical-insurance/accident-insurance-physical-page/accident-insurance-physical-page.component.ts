import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-accident-insurance-physical-page",
  templateUrl: "./accident-insurance-physical-page.component.html",
  styleUrls: ["./accident-insurance-physical-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccidentInsurancePhysicalPageComponent {}
