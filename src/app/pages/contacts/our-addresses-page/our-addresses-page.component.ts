import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-our-addresses-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./our-addresses-page.component.html",
  styleUrls: ["./our-addresses-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurAddressesPageComponent {}
