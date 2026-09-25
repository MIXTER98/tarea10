import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Comp5 } from './comp-5';

describe('Comp5', () => {
  let component: Comp5;
  let fixture: ComponentFixture<Comp5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comp5],
    }).compileComponents();

    fixture = TestBed.createComponent(Comp5);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
