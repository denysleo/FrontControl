import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcadastroComponent } from './editcadastro.component';

describe('EditcadastroComponent', () => {
  let component: EditcadastroComponent;
  let fixture: ComponentFixture<EditcadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
