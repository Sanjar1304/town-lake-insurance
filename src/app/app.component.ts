import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { TranslocoCoreModule } from "@core/modules/transloco/transloco.module";
import { TranslocoModule } from "@ngneat/transloco";
import { HeaderComponent } from "@shared/components/header/header.component";
import { FooterComponent } from "@shared/components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TranslocoCoreModule,
    TranslocoModule,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
