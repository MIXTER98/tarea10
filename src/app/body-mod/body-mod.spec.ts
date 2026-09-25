import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyMod } from './body-mod';

describe('BodyMod', () => {
  let component: BodyMod;
  let fixture: ComponentFixture<BodyMod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyMod],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyMod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
