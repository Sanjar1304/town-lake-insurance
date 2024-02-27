import { Component, Input } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { IAdvantageInterface } from "@core/interfaces/company-about/adavantages.interface";

@Component({
  selector: "app-advantages",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./advantages.component.html",
  styleUrls: ["./advantages.component.scss"],
})
export class AdvantagesComponent {
  @Input() public cards?: IAdvantageInterface[];
}
