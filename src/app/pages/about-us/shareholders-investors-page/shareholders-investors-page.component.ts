import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-shareholders-investors-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./shareholders-investors-page.component.html",
  styleUrls: ["./shareholders-investors-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareholdersInvestorsPageComponent {}
