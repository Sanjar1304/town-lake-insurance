import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TendersPageComponent } from './tenders-page.component';

describe('TendersComponent', () => {
  let component: TendersPageComponent;
  let fixture: ComponentFixture<TendersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TendersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TendersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
