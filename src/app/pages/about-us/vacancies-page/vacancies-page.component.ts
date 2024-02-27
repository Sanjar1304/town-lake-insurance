import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-vacancies-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./vacancies-page.component.html",
  styleUrls: ["./vacancies-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacanciesPageComponent {}
