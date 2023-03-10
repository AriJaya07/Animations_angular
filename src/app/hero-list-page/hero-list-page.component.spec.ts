import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListPageComponent } from './hero-list-page.component';

describe('HeroListPageComponent', () => {
  let component: HeroListPageComponent;
  let fixture: ComponentFixture<HeroListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
