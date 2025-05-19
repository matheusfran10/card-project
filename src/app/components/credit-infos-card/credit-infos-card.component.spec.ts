import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditInfosCardComponent } from './credit-infos-card.component';

describe('CreditInfosCardComponent', () => {
  let component: CreditInfosCardComponent;
  let fixture: ComponentFixture<CreditInfosCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreditInfosCardComponent]
    });
    fixture = TestBed.createComponent(CreditInfosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
