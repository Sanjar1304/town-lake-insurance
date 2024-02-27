import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-carrier-civil-liability-corporate-page",
  templateUrl: "./carrier-civil-liability-corporate-page.component.html",
  styleUrls: ["./carrier-civil-liability-corporate-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarrierCivilLiabilityCorporatePageComponent {}
