import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-property-insurance-for-individuals-physical-page",
  templateUrl:
    "./property-insurance-for-individuals-physical-page.component.html",
  styleUrls: [
    "./property-insurance-for-individuals-physical-page.component.scss",
  ],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyInsuranceForIndividualsPhysicalPageComponent {}
