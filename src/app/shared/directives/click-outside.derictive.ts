import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  Output,
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { fromEvent, filter, Subscription } from "rxjs";

import { UnsubscribeDirective } from "@core/directives/unsubscribe.directive";

@Directive({
  selector: "[appClickOutside]",
  standalone: true
})
export class ClickOutsideDirective
  extends UnsubscribeDirective
  implements AfterViewInit, OnDestroy
{
  @Output() public clickOutside: EventEmitter<void> = new EventEmitter<void>();

  public documentClickSubscription: Subscription | undefined;

  public constructor(
    private _element: ElementRef,
    @Inject(DOCUMENT) private _document: Document
  ) {
    super();
  }

  public ngAfterViewInit(): void {
    this.subscribeTo = this.documentClickSubscription = fromEvent(
      this._document,
      "click"
    )
      .pipe(
        filter((event) => {
          return !this.isInside(event.target as HTMLElement);
        })
      )
      .subscribe((): void => {
        this.clickOutside.emit();
      });
  }

  public isInside(elementToCheck: HTMLElement): boolean {
    return (
      elementToCheck === this._element.nativeElement ||
      this._element.nativeElement.contains(elementToCheck)
    );
  }
}
