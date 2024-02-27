import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-mortgage-insurance-corporate-page",
  templateUrl: "./mortgage-insurance-corporate-page.component.html",
  styleUrls: ["./mortgage-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MortgageInsuranceCorporatePageComponent {}
