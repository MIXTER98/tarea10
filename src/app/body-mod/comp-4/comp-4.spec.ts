import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comp4 } from './comp-4';

describe('Comp4', () => {
  let component: Comp4;
  let fixture: ComponentFixture<Comp4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp4],
    }).compileComponents();

    fixture = TestBed.createComponent(Comp4);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
