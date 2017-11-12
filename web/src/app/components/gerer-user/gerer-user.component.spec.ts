import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GererUserComponent } from './gerer-user.component';

describe('GererUserComponent', () => {
  let component: GererUserComponent;
  let fixture: ComponentFixture<GererUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GererUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GererUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
