import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-corporate-clients-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./corporate-clients-page.component.html",
  styleUrls: ["./corporate-clients-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CorporateClientsPageComponent {}
