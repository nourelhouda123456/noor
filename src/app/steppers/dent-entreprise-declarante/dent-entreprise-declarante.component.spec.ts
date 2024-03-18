import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentEntrepriseDeclaranteComponent } from './dent-entreprise-declarante.component';

describe('DentEntrepriseDeclaranteComponent', () => {
  let component: DentEntrepriseDeclaranteComponent;
  let fixture: ComponentFixture<DentEntrepriseDeclaranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DentEntrepriseDeclaranteComponent]
    });
    fixture = TestBed.createComponent(DentEntrepriseDeclaranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
