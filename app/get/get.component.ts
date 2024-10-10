import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-get',
  standalone: true,
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  templateUrl: './get.component.html',
  styleUrl: './get.component.scss'
})
export class GetComponent {
  searchForm:any
 
ngOnInit(){
  this.searchForm=new FormGroup({
    searchField:new FormControl('',Validators.required)
   })
}
constructor(private api:WeatherService){
  
}
searchweather(){
  console.log(this.searchForm.value)
 return this.api.getWeather((this.searchForm.get(['city'])!.value)).subscribe((x:any)=>{
console.log(x)
 })
 
}
 
}
