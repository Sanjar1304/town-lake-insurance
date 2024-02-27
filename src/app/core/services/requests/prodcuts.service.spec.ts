import { TestBed } from "@angular/core/testing";

import { ProdcutsService } from "./prodcuts.service";
import { provideHttpClient } from "@angular/common/http";

describe("ProdcutsService", () => {
  let service: ProdcutsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(ProdcutsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
