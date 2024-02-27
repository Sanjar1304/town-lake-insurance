import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { FooterComponent } from "./footer.component";
import { CompanyAboutService } from "@core/services/requests/company-about.service";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, RouterTestingModule],
      providers: [CompanyAboutService, provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
