import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-supervisory-board-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./supervisory-board-page.component.html",
  styleUrls: ["./supervisory-board-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupervisoryBoardPageComponent {}
