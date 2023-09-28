import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroboxComponent } from './herobox.component';

describe('HeroboxComponent', () => {
  let component: HeroboxComponent;
  let fixture: ComponentFixture<HeroboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroboxComponent]
    });
    fixture = TestBed.createComponent(HeroboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
