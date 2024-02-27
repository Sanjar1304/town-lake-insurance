import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholdersInvestorsPageComponent } from './shareholders-investors-page.component';

describe('ShareholdersInvestorsComponent', () => {
  let component: ShareholdersInvestorsPageComponent;
  let fixture: ComponentFixture<ShareholdersInvestorsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ShareholdersInvestorsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareholdersInvestorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
