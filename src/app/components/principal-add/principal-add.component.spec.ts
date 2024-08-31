import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalAddComponent } from './principal-add.component';

describe('PrincipalAddComponent', () => {
  let component: PrincipalAddComponent;
  let fixture: ComponentFixture<PrincipalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
