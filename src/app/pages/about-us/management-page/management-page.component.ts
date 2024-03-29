import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-management-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./management-page.component.html",
  styleUrls: ["./management-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementPageComponent {}
