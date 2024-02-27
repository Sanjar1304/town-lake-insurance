import { Component, Input } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { PartnerInterface } from "@core/interfaces/company-about/partner.interface";

@Component({
  selector: "app-partners",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./partners.component.html",
  styleUrls: ["./partners.component.scss"],
})
export class PartnersComponent {
  @Input() public cards?: PartnerInterface[];
}
