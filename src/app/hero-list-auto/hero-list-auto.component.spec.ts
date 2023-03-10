import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListAutoComponent } from './hero-list-auto.component';

describe('HeroListAutoComponent', () => {
  let component: HeroListAutoComponent;
  let fixture: ComponentFixture<HeroListAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroListAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroListAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
