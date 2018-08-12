import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';
import { Chart } from 'chart.js';
//import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

	chart = [];


  constructor(private _data: DataService) { }

  ngOnInit() {

  	this._data.getJSON().subscribe(res => {
            console.log(res)
            //console.log(res.list)
           // console.log(data.list[0])

           let temp_max = res['list'].map(res => res.main.temp_max)
           console.log(temp_max)
            let temp_min = res['list'].map(res => res.main.temp_min)
            let temp = res['list'].map(res => res.main.temp)
             let allmonths = res['list'].map(res => res.month)

              this.chart = new Chart('piechart',{
             	type: 'pie',
             	data : {

             		labels: allmonths, // x axis
             		datasets: [
             			
             			{
             				label: 'Temperature',
             				data: temp,
             				borderColor: '#ffcc00',
             				backgroundColor: ['#ffcc00','#0044cc','#ff0000','#800000','#808000','#ff6666','#1affff'],
             				fill: true
             			}
             			

             		]
             	},

             	options: {
             		/*
						plugins: {
           						 filler: {
               						 propagate: true
           								}
       					 },
       					 */
       					 responsive: true,
       					 title: {
					display: true,
					text: 'Pie Chart showing Temperature of months from January to July',
					fontFamily : 'Helvetica',
					fontSize: 15,
					position:'top',
					padding: 15
				},
             		legend:{

             			display: true
             		},
             		tooltips: {
					mode: 'index',
				},
             		hover: {
					mode: 'index'
				}
             		
             	}
             })
        });
  }

}