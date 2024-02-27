import { Component, Input } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ISpecialOfferInterface } from "@core/interfaces/company-about/specialOffer.interface";

@Component({
  selector: "app-special-offer",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./special-offer.component.html",
  styleUrls: ["./special-offer.component.scss"],
})
export class SpecialOfferComponent {
  @Input() public cards?: ISpecialOfferInterface[];
}
