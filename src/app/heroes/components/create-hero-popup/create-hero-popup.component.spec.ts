import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHeroPopupComponent } from './create-hero-popup.component';

describe('CreateHeroPopupComponent', () => {
  let component: CreateHeroPopupComponent;
  let fixture: ComponentFixture<CreateHeroPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHeroPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHeroPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
