import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHeroPopupComponent } from './delete-hero-popup.component';

describe('DeleteHeroPopupComponent', () => {
  let component: DeleteHeroPopupComponent;
  let fixture: ComponentFixture<DeleteHeroPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteHeroPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteHeroPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
