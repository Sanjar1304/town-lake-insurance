import { Component, Input } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";

import { CompanyInNumsInterface } from "@core/interfaces/company-about/companyInNums.interface";
import { TranslocoModule } from "@ngneat/transloco";
@Component({
  selector: "app-company-in-numbers",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslocoModule],
  templateUrl: "./company-in-numbers.component.html",
  styleUrls: ["./company-in-numbers.component.scss"],
})
export class CompanyInNumbersComponent {
  @Input() public cards?: CompanyInNumsInterface[];
}
