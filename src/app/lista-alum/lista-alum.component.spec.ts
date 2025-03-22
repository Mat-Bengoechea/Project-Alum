import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlumComponent } from './lista-alum.component';

describe('ListaAlumComponent', () => {
  let component: ListaAlumComponent;
  let fixture: ComponentFixture<ListaAlumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaAlumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
