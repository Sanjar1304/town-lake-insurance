import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-organisational-structure-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./organisational-structure-page.component.html",
  styleUrls: ["./organisational-structure-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationalStructurePageComponent {}
