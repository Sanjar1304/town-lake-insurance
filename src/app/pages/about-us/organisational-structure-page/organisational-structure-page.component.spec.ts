import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationalStructurePageComponent } from './organisational-structure-page.component';

describe('OrganisationalStructureComponent', () => {
  let component: OrganisationalStructurePageComponent;
  let fixture: ComponentFixture<OrganisationalStructurePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OrganisationalStructurePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationalStructurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
