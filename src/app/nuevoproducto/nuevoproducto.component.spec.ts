import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoproductoComponent } from './nuevoproducto.component';

describe('NuevoproductoComponent', () => {
  let component: NuevoproductoComponent;
  let fixture: ComponentFixture<NuevoproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
