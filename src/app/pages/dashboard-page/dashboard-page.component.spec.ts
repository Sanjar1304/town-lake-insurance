import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { DashboardPageComponent } from "./dashboard-page.component";
import { CompanyAboutService } from "@core/services/requests/company-about.service";

describe("DashboardComponent", () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageComponent],
      providers: [CompanyAboutService, provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
