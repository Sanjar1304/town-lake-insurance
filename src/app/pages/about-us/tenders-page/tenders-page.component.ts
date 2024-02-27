import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tenders-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tenders-page.component.html",
  styleUrls: ["./tenders-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TendersPageComponent {}
