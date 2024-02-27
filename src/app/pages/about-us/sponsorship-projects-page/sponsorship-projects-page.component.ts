import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sponsorship-projects-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sponsorship-projects-page.component.html",
  styleUrls: ["./sponsorship-projects-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorshipProjectsPageComponent {}
