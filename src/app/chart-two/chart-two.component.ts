import { Component } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@Component({
  selector: 'app-chart-two',
  standalone: true,
  imports: [FusionChartsModule],
  templateUrl: './chart-two.component.html',
  styleUrls: ['./chart-two.component.css'],
})
export class ChartTwoComponent {
  dataSource: any;

  constructor() {
    this.dataSource = {
      chart: {
        theme: 'fusion',
        legendPosition: 'BOTTOM',
        legendScrollBgColor: '#fff',
        legendBorderColor: '#666666',
        legendBorderThickness: 1,
        legendBorderAlpha: 100,
        legendBgAlpha: 0, // Transparent background
        legendItemFontSize: '10',
        legendItemFontColor: '#666666',
        plotHoverEffect: '1',
        slantLabel: '1',
        labelFontColor: '000',
        outCnvBaseFontSize: '12',
        yAxisMinValue: '10',
        chartLeftMargin: '22',
        chartTopMargin: '55',
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
        plotSpacePercent: '45',
        yAxisValueFontBold: '1',
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
                text: 'Storage',
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
      categories: [
        {
          category: [
            { label: 'Week 1' },
            { label: 'Week 2' },
            { label: 'Week 3' },
            { label: 'Week 4' },
            { label: 'Week 5' },
            { label: 'Week 6' },
            { label: 'Week 7' },
            { label: 'Week 8' },
            { label: 'Week 9' },
            { label: 'Week 10' },
          ],
        },
      ],
      dataset: [
        {
          seriesname: 'SSF',
          color: '#4BB4E6',
          data: [
            { value: '30' },
            { value: '35' },
            { value: '32' },
            { value: '38' },
            { value: '37' },
            { value: '32' },
            { value: '32' },
            { value: '38' },
            { value: '35' },
            { value: '34' },
          ],
        },
        {
          seriesname: 'Legal Management',
          color: '#50BE87',
          data: [
            { value: '18' },
            { value: '22' },
            { value: '21' },
            { value: '22' },
            { value: '21' },
            { value: '22' },
            { value: '20' },
            { value: '23' },
            { value: '24' },
            { value: '25' },
          ],
        },
        {
          seriesname: 'Quality',
          color: '#FFB4E6',
          data: [
            { value: '15' },
            { value: '18' },
            { value: '12' },
            { value: '14' },
            { value: '25' },
            { value: '15' },
            { value: '21' },
            { value: '25' },
            { value: '20' },
            { value: '18' },
          ],
        },
        {
          seriesname: 'Sales Academy',
          color: '#A885D8',
          data: [
            { value: '35' },
            { value: '36' },
            { value: '38' },
            { value: '37' },
            { value: '39' },
            { value: '40' },
            { value: '38' },
            { value: '37' },
            { value: '39' },
            { value: '40' },
          ],
        },
        {
          seriesname: 'Collaborative',
          color: '#FFD200',
          data: [
            { value: '28' },
            { value: '29' },
            { value: '27' },
            { value: '30' },
            { value: '28' },
            { value: '29' },
            { value: '27' },
            { value: '30' },
            { value: '28' },
            { value: '29' },
          ],
        },
        {
          seriesname: '360 Feedback',
          color: '#085EBD',
          data: [
            { value: '45' },
            { value: '43' },
            { value: '44' },
            { value: '46' },
            { value: '47' },
            { value: '45' },
            { value: '46' },
            { value: '48' },
            { value: '46' },
            { value: '47' },
          ],
        },
        {
          seriesname: 'GIC',
          color: '#0A6E31',
          data: [
            { value: '20' },
            { value: '22' },
            { value: '25' },
            { value: '23' },
            { value: '26' },
            { value: '28' },
            { value: '27' },
            { value: '29' },
            { value: '30' },
            { value: '31' },
          ],
        },
        {
          seriesname: 'O.Zone',
          color: '#FF8AD4',
          data: [
            { value: '10' },
            { value: '15' },
            { value: '14' },
            { value: '16' },
            { value: '17' },
            { value: '19' },
            { value: '18' },
            { value: '17' },
            { value: '16' },
            { value: '15' },
          ],
        },
        {
          seriesname: 'Intranet',
          color: '#492191',
          data: [
            { value: '12' },
            { value: '18' },
            { value: '16' },
            { value: '15' },
            { value: '14' },
            { value: '13' },
            { value: '14' },
            { value: '15' },
            { value: '16' },
            { value: '17' },
          ],
        },
        {
          seriesname: 'Roadmap Tool',
          color: '#FFB400',
          data: [
            { value: '25' },
            { value: '26' },
            { value: '28' },
            { value: '30' },
            { value: '29' },
            { value: '28' },
            { value: '27' },
            { value: '26' },
            { value: '25' },
            { value: '24' },
          ],
        },
        {
          seriesname: 'Career Path',
          color: '#B5E8F7',
          data: [
            { value: '30' },
            { value: '31' },
            { value: '32' },
            { value: '34' },
            { value: '33' },
            { value: '35' },
            { value: '34' },
            { value: '33' },
            { value: '32' },
            { value: '31' },
          ],
        },
        {
          seriesname: 'TTM',
          color: '#FFE8F7',
          data: [
            { value: '20' },
            { value: '21' },
            { value: '23' },
            { value: '22' },
            { value: '24' },
            { value: '23' },
            { value: '22' },
            { value: '21' },
            { value: '20' },
            { value: '19' },
          ],
        },
        {
          seriesname: 'Litigation',
          color: '#D9C2F0',
          data: [
            { value: '18' },
            { value: '19' },
            { value: '20' },
            { value: '21' },
            { value: '22' },
            { value: '23' },
            { value: '24' },
            { value: '25' },
            { value: '26' },
            { value: '27' },
          ],
        },
        {
          seriesname: 'InfoShare',
          color: '#FFF6B6',
          data: [
            { value: '15' },
            { value: '16' },
            { value: '17' },
            { value: '18' },
            { value: '19' },
            { value: '20' },
            { value: '21' },
            { value: '20' },
            { value: '19' },
            { value: '18' },
          ],
        },
        // Add other series following the same structure
      ],
    };
  }
}
