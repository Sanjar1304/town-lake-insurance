import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { UnsubscribeDirective } from "@core/directives/unsubscribe.directive";
import { TranslocoCoreModule } from "@core/modules/transloco/transloco.module";

export interface IErrorConfig {
  error: 404 | 500 | 0;
  image: string;
  icon: string;
  title: string;
  message: string;
}

export const errorPageConfigs: IErrorConfig[] = [
  {
    error: 404,
    image: "assets/images/errors/404.png",
    icon: "assets/icons/errors/cracked-glass.svg",
    title: "ErrorPage.404.Title",
    message: "ErrorPage.404.Subtitle",
  },
  {
    error: 500,
    image: "assets/images/errors/500.png",
    icon: "assets/icons/errors/plugged-out.svg",
    title: "ErrorPage.500.Title",
    message: "ErrorPage.500.Subtitle",
  },
  {
    error: 0,
    image: "assets/images/errors/0.png",
    icon: "assets/icons/errors/cracked-glass.svg",
    title: "ErrorPage.Default.Title",
    message: "ErrorPage.Default.Subtitle",
  },
];

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.scss"],
  imports: [RouterModule, CommonModule, TranslocoCoreModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ErrorPageComponent extends UnsubscribeDirective implements OnInit {
  public errorPageConfig?: IErrorConfig;

  public constructor(private _router: Router) {
    super();
  }

  public ngOnInit(): void {
    this.defineError();
  }

  public defineError(): void {
    this.errorPageConfig =
      errorPageConfigs.find((e: IErrorConfig): boolean =>
        this._router.url.includes(e.error.toString())
      ) || errorPageConfigs.find((e: IErrorConfig): boolean => e.error === 0);
  }
}
