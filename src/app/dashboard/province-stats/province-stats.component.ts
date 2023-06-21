import { Component, ViewChild } from "@angular/core";
import {
    ApexAxisChartSeries,
    ApexChart,
    ChartComponent,
    ApexDataLabels,
    ApexPlotOptions,
    ApexYAxis,
    ApexLegend,
    ApexStroke,
    ApexGrid,
    ApexXAxis,
    ApexFill,
    ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    dataLabels: ApexDataLabels;
    plotOptions: ApexPlotOptions;
    yaxis: ApexYAxis;
    xaxis: ApexXAxis;
    grid: ApexGrid;
    fill: ApexFill;
    tooltip: ApexTooltip;
    stroke: ApexStroke;
    legend: ApexLegend;
    colors: any;
};

@Component({
  selector: 'app-province-stats',
  templateUrl: './province-stats.component.html',
  styleUrls: ['./province-stats.component.scss']
})
export class ProvinceStatsComponent {

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
      this.chartOptions = {
          series: [
              {
                  name: "Total cas confirmé:",
                  data: [1026, 1554, 497, 1126, 908, 1512, 604, 1047, 1354, 826],
              }
          ],
          chart: {
              type: "bar",
              height: 480,
              toolbar: {
                  show: false
              }
          },
          plotOptions: {
              bar: {
                  horizontal: true
              }
          },
          dataLabels: {
              enabled: false
          },
          colors: [
              "#757FEF"
          ],
          stroke: {
              width: 0,
              show: true,
              colors: ["transparent"]
          },
          xaxis: {
              categories: [
                  "Bas-Uele",	
                  "Équateur",	
                  "Haut-Katanga",	
                  "Haut-Lomami",	
                  "Haut-Uele",
                  "Ituri",
                  "Bunia",
                  "Kasaï",
                  "Tshikapa",	
                  "Kasaï central"
              ],
              labels: {
                  show: true,
                  style: {
                      colors: "#a9a9c8",
                      fontSize: "14px"
                  },
              },
              axisBorder: {
                  show: false,
              },
              axisTicks: {
                  show: false
              }
          },
          yaxis: {
              labels: {
                  style: {
                      colors: "#a9a9c8",
                      fontSize: "14px"
                  }
              },
              axisBorder: {
                  show: false
              }
          },
          fill: {
              opacity: 1
          },
          tooltip: {
              y: {
                  formatter: function(val) {
                      return val + " patients";
                  }
              }
          },
          legend: {
              offsetY: 5,
              fontSize: "14px",
              position: "bottom",
              horizontalAlign: "center",
              labels: {
                  colors: '#5B5B98'
              }
          },
          grid: {
              show: true,
              borderColor: "#EDEFF5",
              strokeDashArray: 5
          }
      };
  }
}
