import { Component, Input } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { AdvertisementInterface } from "@core/interfaces/company-about/advertisement.interface";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent {
  @Input() public cards?: AdvertisementInterface[];
}
