import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-infectious-disease-insurance-physical-page",
  templateUrl: "./infectious-disease-insurance-physical-page.component.html",
  styleUrls: ["./infectious-disease-insurance-physical-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfectiousDiseaseInsurancePhysicalPageComponent {}
