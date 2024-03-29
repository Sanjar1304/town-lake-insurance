import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about-us-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./about-us-page.component.html",
  styleUrls: ["./about-us-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsPageComponent {}
