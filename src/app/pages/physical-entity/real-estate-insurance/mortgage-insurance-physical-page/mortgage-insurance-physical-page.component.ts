import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-mortgage-insurance-physical-page",
  templateUrl: "./mortgage-insurance-physical-page.component.html",
  styleUrls: ["./mortgage-insurance-physical-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MortgageInsurancePhysicalPageComponent {}
