import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderMod } from './header-mod';

describe('HeaderMod', () => {
  let component: HeaderMod;
  let fixture: ComponentFixture<HeaderMod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMod],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderMod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
