import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatBulleComponent } from './achat-bulle.component';

describe('AchatBulleComponent', () => {
  let component: AchatBulleComponent;
  let fixture: ComponentFixture<AchatBulleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchatBulleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatBulleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
