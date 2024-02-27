import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-gadget-insurance-physical-page",
  templateUrl: "./gadget-insurance-physical-page.component.html",
  styleUrls: ["./gadget-insurance-physical-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GadgetInsurancePhysicalPageComponent {}
