import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';


chart = [];
  constructor(private _data: DataService) {}

  ngOnInit(){

  	//this._data.dailyForecast().subscribe(res =>{
  		//console.log(res);

  		this._data.getJSON().subscribe(res => {
            console.log(res)
            //console.log(res.list)
           // console.log(data.list[0])

           let temp_max = res['list'].map(res => res.main.temp_max)
           console.log(temp_max)
            let temp_min = res['list'].map(res => res.main.temp_min)
             let alldates = res['list'].map(res => res.dt)

             let weatherDates = []
             alldates.forEach((res) => {
             	let jsdate = new Date(res * 1000)
             	weatherDates.push(jsdate.toLocaleTimeString('en',{ year: 'numeric', month : 'short', day:'numeric'}))

             })

             console.log("weather dates "+weatherDates)

             this.chart = new Chart('canvas',{
             	type: 'line',
             	data : {

             		labels: weatherDates, // x axis
             		datasets: [
             			{
             				data: temp_max,
             				borderColor: '#3cba9f',
             				fill: false
             			},
             			{
             				data: temp_min,
             				borderColor: '#ffcc00',
             				fill: false
             			}

             		]
             	},

             	options: {

             		legend:{

             			display: false
             		},
             		scales: {

             			xAxes:[
						  {
						  	display: true	


						  }
             			],
             			yAxes:[
             			{
             				display: true
             			}]
             		}
             	}
             })
        });
  	}

  }

