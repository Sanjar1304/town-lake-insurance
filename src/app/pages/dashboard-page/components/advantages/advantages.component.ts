import { Component, Input } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { IAdvantageInterface } from "@core/interfaces/company-about/adavantages.interface";
import { TranslocoModule } from "@ngneat/transloco";

@Component({
  selector: "app-advantages",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslocoModule],
  templateUrl: "./advantages.component.html",
  styleUrls: ["./advantages.component.scss"],
})
export class AdvantagesComponent {
  @Input() public cards?: IAdvantageInterface[];
}
