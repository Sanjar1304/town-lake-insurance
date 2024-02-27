import { Component, Input } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { INews } from "@core/interfaces/news/news.interface";

@Component({
  selector: "app-news",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.scss"],
})
export class NewsComponent {
  @Input() public cards?: INews[];
}
