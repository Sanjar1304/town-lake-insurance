import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

import { CompanyAboutService } from "./company-about.service";
import { CommonModule } from "@angular/common";

describe("CompanyAboutService", () => {
  let service: CompanyAboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, CommonModule],
      providers: [],
    });
    service = TestBed.inject(CompanyAboutService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
