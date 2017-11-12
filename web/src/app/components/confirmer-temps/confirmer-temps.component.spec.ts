import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmerTempsComponent } from './confirmer-temps.component';

describe('ConfirmerTempsComponent', () => {
  let component: ConfirmerTempsComponent;
  let fixture: ComponentFixture<ConfirmerTempsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmerTempsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmerTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
