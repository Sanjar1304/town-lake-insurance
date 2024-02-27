import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-financial-reports-page",
  templateUrl: "./financial-reports-page.component.html",
  styleUrls: ["./financial-reports-page.component.scss"],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FinancialReportsPageComponent {}
