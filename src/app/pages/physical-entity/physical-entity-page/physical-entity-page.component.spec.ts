import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalEntityPageComponent } from './physical-entity-page.component';

describe('PhysicalEntityPageComponent', () => {
  let component: PhysicalEntityPageComponent;
  let fixture: ComponentFixture<PhysicalEntityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhysicalEntityPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicalEntityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
