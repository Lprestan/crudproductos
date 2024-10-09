import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoproductosComponent } from './listadoproductos.component';

describe('ListadoproductosComponent', () => {
  let component: ListadoproductosComponent;
  let fixture: ComponentFixture<ListadoproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoproductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListadoproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
