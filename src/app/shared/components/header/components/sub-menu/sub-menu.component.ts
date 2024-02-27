import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-sub-menu",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sub-menu.component.html",
  styleUrls: ["./sub-menu.component.scss"],
})
export class SubMenuComponent {
  @Input() public subMenu = "";
}
