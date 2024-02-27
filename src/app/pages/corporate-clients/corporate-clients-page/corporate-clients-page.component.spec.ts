import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CorporateClientsPageComponent } from "./corporate-clients-page.component";

describe("CorporateClientsComponent", () => {
  let component: CorporateClientsPageComponent;
  let fixture: ComponentFixture<CorporateClientsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateClientsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CorporateClientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
