import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-infectious-disease-insurance-corporate-page",
  templateUrl: "./infectious-disease-insurance-corporate-page.component.html",
  styleUrls: ["./infectious-disease-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfectiousDiseaseInsuranceCorporatePageComponent {}
