import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IMenuTab } from "@shared/components/header/components/tab/interfaces/tab.interface";
import { TranslocoModule } from "@ngneat/transloco";

@Component({
  selector: "app-tab",
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.scss"],
})
export class TabComponent {
  @Input() public tabConfig: IMenuTab;
  @Input() public currentParam?: string;

  @Output() public clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  public onClick(): void {
    this.clickEmitter.emit();
  }
}
