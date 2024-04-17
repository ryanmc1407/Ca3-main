import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CarApiService } from '../../Services/car-api.service';
import { Input } from '@angular/core';
import { ICar } from '../../interfaces/car';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})


export class CarComponent {

  @Input() carData?:ICar;
  @Output() carDeletedEvent = new EventEmitter<string>()
  private _carAPIService: CarApiService;
  carImageWidth: number = 300;

  constructor(_carAPIService: CarApiService) {
    this._carAPIService = _carAPIService;
  }
  
  deleteCar(carId:string) { 
    this._carAPIService.delCarDetails(carId).subscribe(result =>
      { 
        console.log(result);
      });
      this.carDeletedEvent.emit("car got deleted")
  }
}