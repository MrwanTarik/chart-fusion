import { Component } from '@angular/core';
import { ChartOneComponent } from './chart-one/chart-one.component';
import { ChartTwoComponent } from "./chart-two/chart-two.component";
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ChartOneComponent, ChartTwoComponent],
})
export class AppComponent {}
