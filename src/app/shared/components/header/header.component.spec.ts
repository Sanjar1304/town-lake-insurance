import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header.component";
import { CompanyAboutService } from "@core/services/requests/company-about.service";
import { TranslocoModule } from "@ngneat/transloco";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule,
        TranslocoModule,
        HttpClientTestingModule,
        HeaderComponent,
        RouterTestingModule,
      ],
      providers: [CompanyAboutService],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
