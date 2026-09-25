import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterMod } from './footer-mod';

describe('FooterMod', () => {
  let component: FooterMod;
  let fixture: ComponentFixture<FooterMod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMod],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterMod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
