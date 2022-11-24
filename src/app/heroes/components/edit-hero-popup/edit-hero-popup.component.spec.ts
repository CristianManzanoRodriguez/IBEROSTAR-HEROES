import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeroPopupComponent } from './edit-hero-popup.component';

describe('EditHeroPopupComponent', () => {
  let component: EditHeroPopupComponent;
  let fixture: ComponentFixture<EditHeroPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHeroPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHeroPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
