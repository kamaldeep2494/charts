import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-stackedarea',
  templateUrl: './stackedarea.component.html',
  styleUrls: ['./stackedarea.component.css']
})
export class StackedareaComponent implements OnInit {

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

            // let weatherDates = []
            // alldates.forEach((res) => {
             //	let jsdate = new Date(res * 1000)
             //	weatherDates.push(jsdate.toLocaleTimeString('en',{ year: 'numeric', month : 'short', day:'numeric'}))

          //   })

         //    console.log("weather dates "+weatherDates)

             this.chart = new Chart('stackedarea',{
             	type: 'line',
             	data : {

             		labels: allmonths, // x axis
             		datasets: [
             			{
             				label: 'Maximum Temperature',
             				data: temp_max,
             				borderColor: '#ff0000', // red
             				backgroundColor: '#ff0000',
             				//hoverBackgroundColor: '#0044cc'
             				fill: true
             			},
             			{
             				label: 'Minimum Temperature',
             				data: temp_min,
             				borderColor: '#0044cc',  // blue
             				backgroundColor: '#0044cc',
             				fill: true
             			},
             			{
             				label: 'Temperature',
             				data: temp,
             				borderColor: '#ffcc00',
             				backgroundColor: '#ffcc00',
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
					text: 'TimeSeries Chart',
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
				},
             		scales: {

             			xAxes:[
						  {
						  //	display:true,
						  	stacked: true,
						  	scaleLabel:{
						  	display: true,
						  	labelString: 'Month',
						  	labels: {
                        show: true
                    }	

}
						  }
             			],
             			yAxes:[
             			{
             				//display:true,
             				stacked: true,
             				scaleLabel:{
             				display: true,
             				labelString: 'Value',
             				labels: {
                        show: true
                    }
             			}
             			}]
             		}
             	}
             })
        });
  }

}
