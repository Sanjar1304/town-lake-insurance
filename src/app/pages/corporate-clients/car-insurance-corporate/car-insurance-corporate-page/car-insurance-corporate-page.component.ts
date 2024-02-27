import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-car-insurance-corporate-page",
  templateUrl: "./car-insurance-corporate-page.component.html",
  styleUrls: ["./car-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarInsuranceCorporatePageComponent {}
