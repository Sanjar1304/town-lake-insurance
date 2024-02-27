import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-social-survey-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./social-survey-page.component.html",
  styleUrls: ["./social-survey-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialSurveyPageComponent {}
