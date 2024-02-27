import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-cargo-insurance-corporate-page",
  templateUrl: "./cargo-insurance-corporate-page.component.html",
  styleUrls: ["./cargo-insurance-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CargoInsuranceCorporatePageComponent {}
