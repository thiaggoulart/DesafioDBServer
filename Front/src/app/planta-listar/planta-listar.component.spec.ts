import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantaListarComponent } from './planta-listar.component';

describe('PlantaListarComponent', () => {
  let component: PlantaListarComponent;
  let fixture: ComponentFixture<PlantaListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantaListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
