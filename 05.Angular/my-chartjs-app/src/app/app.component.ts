import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
declare const Chart: any;
declare const Utils: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  data: number[] = [];
  chart: any; // Grafik instance'ını saklamak için bir alan ekleyin
  labels: number[] = [];
  num = 0;
  maxEntries = 3;

  constructor(){
    setInterval(()=> {
      this.num++;
      //this.data = [];
      const randomNumber = Math.random() * (32 - 30) + 30;
      this.data.push(randomNumber);
      this.labels.push(this.num);
      
      console.log(this.data);   
      this.updateChart();  
    },1000)
  }


  ngAfterViewInit(): void {
    this.initChart();
  }

  initChart() {
    const ctx = document.getElementById('myChart');
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: '# of USD',
          data: this.data,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }

  updateChart() {
    if (!this.chart) return; // Chart instance'ını kontrol et

    
    this.chart.data.labels = this.labels;
    this.chart.data.datasets.forEach((dataset: any) => {
      dataset.data = this.data;
    });


    this.chart.update(); // Grafik güncellemesini tetikle
  }
}
