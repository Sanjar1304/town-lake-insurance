import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-workers-collective-insurance-against-accident-corporate-page",
  templateUrl:
    "./workers-collective-insurance-against-accident-corporate-page.component.html",
  styleUrls: [
    "./workers-collective-insurance-against-accident-corporate-page.component.scss",
  ],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkersCollectiveInsuranceAgainstAccidentCorporatePageComponent {}
