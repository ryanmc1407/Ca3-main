import { Component, Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarApiService } from '../../Services/car-api.service';
import { ICar, NewCar } from '../../interfaces/car';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-carlist',
  standalone: true,
  imports: [CarComponent,CommonModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})



export class CarlistComponent {

  private _carAPIService: CarApiService;

  
  carsData: ICar[] | any;
  show: boolean = false;

  constructor(_carAPIService: CarApiService) {
    this._carAPIService = _carAPIService;

  }
  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this._carAPIService.getCarDetails().subscribe(carsData =>
      { this.carsData = carsData
    });
  }

  addCar(make:string, model:string, year:string,imageUrl:string):boolean {
    let addCar:ICar;
    addCar=new NewCar(make,model,year,imageUrl);
    this._carAPIService.addCarDetails(addCar).subscribe(carsData =>
      { this.carsData = carsData}
    );
     this.getCars ()
    return false;
    }

    refreshCars() {
      this.getCars();
    }
  }
  
