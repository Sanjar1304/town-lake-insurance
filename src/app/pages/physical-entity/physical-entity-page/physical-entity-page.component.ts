import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-physical-entity-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./physical-entity-page.component.html",
  styleUrls: ["./physical-entity-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhysicalEntityPageComponent {}
