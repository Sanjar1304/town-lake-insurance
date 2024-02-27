import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInNumbersComponent } from './company-in-numbers.component';

describe('CompanyInNumbersComponent', () => {
  let component: CompanyInNumbersComponent;
  let fixture: ComponentFixture<CompanyInNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CompanyInNumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyInNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
