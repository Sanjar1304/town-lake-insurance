import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-accident-insurance-corporate-page",
  templateUrl: "./accident-insurance-corporate-page.component.html",
  styleUrls: ["./accident-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccidentInsuranceCorporatePageComponent {}
