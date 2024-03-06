import { Component, Input } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { IProduct } from "@core/interfaces/products/product.interface";
import { TranslocoModule } from "@ngneat/transloco";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslocoModule],
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  @Input() public cards?: IProduct[];
}
