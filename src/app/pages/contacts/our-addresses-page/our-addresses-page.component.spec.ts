import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAddressesPageComponent } from './our-addresses-page.component';

describe('OurAddressesComponent', () => {
  let component: OurAddressesPageComponent;
  let fixture: ComponentFixture<OurAddressesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OurAddressesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAddressesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
