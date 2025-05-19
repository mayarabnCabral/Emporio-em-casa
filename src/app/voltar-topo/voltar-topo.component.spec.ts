import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoltarTopoComponent } from './voltar-topo.component';

describe('VoltarAoTopoComponent', () => {
  let component: VoltarTopoComponent;
  let fixture: ComponentFixture<VoltarTopoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoltarTopoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoltarTopoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
