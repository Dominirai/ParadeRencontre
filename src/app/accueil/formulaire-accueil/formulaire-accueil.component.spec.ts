import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAccueilComponent } from './formulaire-accueil.component';

describe('FormulaireAccueilComponent', () => {
  let component: FormulaireAccueilComponent;
  let fixture: ComponentFixture<FormulaireAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
