import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarlistComponent } from '../components/carlist/carlist.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarlistComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Carsales-nosql';
}
