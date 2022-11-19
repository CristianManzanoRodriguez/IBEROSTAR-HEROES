import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesPaginationComponent } from './heroes-pagination.component';

describe('HeroesPaginationComponent', () => {
  let component: HeroesPaginationComponent;
  let fixture: ComponentFixture<HeroesPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
