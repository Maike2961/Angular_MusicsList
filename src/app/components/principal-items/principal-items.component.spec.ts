import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalItemsComponent } from './principal-items.component';

describe('PrincipalItemsComponent', () => {
  let component: PrincipalItemsComponent;
  let fixture: ComponentFixture<PrincipalItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
