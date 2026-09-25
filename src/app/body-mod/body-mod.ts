import { Component } from '@angular/core';
import { Comp1 } from './comp-1/comp-1';
import { Comp2 } from './comp-2/comp-2';
import { Comp3 } from './comp-3/comp-3';
import { Comp4 } from './comp-4/comp-4';
import { Comp5 } from './comp-5/comp-5';


@Component({
  imports: [Comp1, Comp2, Comp3, Comp4, Comp5],
  selector: 'app-body-mod',
  styleUrl: './body-mod.css',
  templateUrl: './body-mod.html',
})
export class BodyMod {}
