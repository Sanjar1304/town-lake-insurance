import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-athletes-insurance-corporate-page",
  templateUrl: "./athletes-insurance-corporate-page.component.html",
  styleUrls: ["./athletes-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AthletesInsuranceCorporatePageComponent {}
