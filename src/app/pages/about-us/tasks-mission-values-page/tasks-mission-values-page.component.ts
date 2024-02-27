import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-tasks-mission-values-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./tasks-mission-values-page.component.html",
  styleUrls: ["./tasks-mission-values-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksMissionValuesPageComponent {}
