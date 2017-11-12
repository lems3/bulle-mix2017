import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieTempsComponent } from './saisie-temps.component';

describe('SaisieTempsComponent', () => {
  let component: SaisieTempsComponent;
  let fixture: ComponentFixture<SaisieTempsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisieTempsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
