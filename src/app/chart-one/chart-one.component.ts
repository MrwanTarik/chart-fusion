import { Component } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts'; // This should be adjusted to import Charts
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Initialize FusionCharts with necessary modules
FusionChartsModule.fcRoot(FusionCharts, Column2D, FusionTheme);
@Component({
  standalone: true,
  selector: 'app-chart-one',
  templateUrl: './chart-one.component.html',
  styleUrls: ['./chart-one.component.css'],
  imports: [FusionChartsModule],
})
export class ChartOneComponent {
  dataSource: Object;
  constructor() {
    const chartData = [
      {
        label: 'SSF',
        value: '30',
        color: '#4BB4E6',
      },
      {
        label: 'Legal Management',
        value: '52',
        color: '#50BE87',
      },
      {
        label: 'Quality',
        value: '43',
        color: '#FFB4E6',
      },
      {
        label: 'Sales Academy',
        value: '33',
        color: '#A885D8',
      },
      {
        label: 'Collaborative',
        value: '30',
        color: '#FFD200',
      },
      {
        label: '360 Feedback',
        value: '52',
        color: '#085EBD',
      },
      {
        label: 'GIC',
        value: '43',
        color: '#0A6E31',
      },
      {
        label: 'O.Zone',
        value: '34',
        color: '#FF8AD4',
      },
      {
        label: 'Intranet',
        value: '30',
        color: '#492191',
      },
      {
        label: 'Roadmap Tool',
        value: '52',
        color: '#FFB400',
      },
      {
        label: 'Career Path',
        value: '42',
        color: '#B5E8F7',
      },
      {
        label: 'TTM',
        value: '32',
        color: '#FFE8F7',
      },
      {
        label: 'Litigation',
        value: '33',
        color: '#D9C2F0',
      },
      {
        label: 'InfoShare',
        value: '30',
        color: '#FFF6B6',
      },
    ];
    const dataSource = {
      chart: {
        theme: 'fusion',
        plotHoverEffect: '1',
        labelDisplay: 'rotate',
        slantLabel: '1',
        labelFontColor: '000',
        outCnvBaseFontSize: '12',
        yAxisMinValue: '10',
        chartLeftMargin: '22',
        chartTopMargin: '70',
        chartRightMargin: '22',
        chartBottomMargin: '20',
        labelPadding: '10',
        labelFont: 'Arial',
        yAxisValuesPadding: '14',
        valueFontBold: '1',
        showXAxisLine: '1',
        showYAxisLine: '1',
        xAxisLineColor: '#CCCCCC',
        yAxisLineColor: '#CCCCCC',
        yAxisLineThickness: '2',
        xAxisLineThickness: '2',
        plotSpacePercent: 50,
        yAxisValueFontBold: '1',
        numDivLines: '6',
        canvasLeftPadding: '35',
        canvasRightPadding: '25',
      },
      annotations: {
        autoScale: '1',
        groups: [
          {
            id: 'yAxisName',
            items: [
              {
                id: 'yAxisLabel',
                type: 'text',
                text: 'Users',
                align: 'left',
                fontSize: '14',
                color: '#000000',
                x: '$chartStartX + 18',
                y: '$canvasStartY -35',
                bold: '1',
              },
            ],
          },
        ],
      },
      // Chart Data - from step 2
      data: chartData,
    };
    this.dataSource = dataSource;
  }
}
