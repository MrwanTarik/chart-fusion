import { Component } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);
@Component({
  selector: 'app-chart-three',
  standalone: true,
  imports: [FusionChartsModule],
  templateUrl: './chart-three.component.html',
  styleUrl: './chart-three.component.css',
})
export class ChartThreeComponent {
  dataSource: any = {
    chart: {
      theme: 'fusion',
      plotHoverEffect: '1',
      labelDisplay: 'rotate',
      slantLabel: '1',
      labelFontColor: '000000',
      outCnvBaseFontSize: '12',
      yAxisMinValue: '0',
      yAxisMaxValue: '60',
      numDivLines: '5',
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
      plotSpacePercent: '70',
      canvasLeftPadding: '35',
      canvasRightPadding: '25',
    },
    categories: [
      {
        category: [
          { label: 'Admin' },
          { label: 'Moderator' },
          { label: 'Editor' },
          { label: 'User' },
          { label: 'Collaborative' },
          { label: '360 Feedback' },
          { label: 'GIC' },
          { label: 'O.Zone' },
          { label: 'Intranet' },
          { label: 'Roadmap Tool' },
          { label: 'Career Path' },
          { label: 'TTM' },
          { label: 'Litigation' },
          { label: 'InfoShare' },
        ],
      },
    ],
    dataset: [
      {
        seriesname: 'No. of files',
        allowDrag: '0',
        color: '#50BE87',
        data: [
          { value: '33' },
          { value: '28' },
          { value: '27' },
          { value: '40' },
          { value: '33' },
          { value: '28' },
          { value: '28' },
          { value: '39' },
          { value: '33' },
          { value: '33' },
          { value: '28' },
          { value: '28' },
          { value: '40' },
          { value: '33' },
          { value: '29' },
        ],
      },
      {
        seriesname: 'Size of files',
        dashed: '1',
        color: '#FFB4E6',
        data: [
          { value: '43' },
          { value: '21' },
          { value: '34' },
          { value: '42' },
          { value: '43' },
          { value: '22' },
          { value: '33' },
          { value: '43' },
          { value: '43' },
          { value: '21' },
          { value: '34' },
          { value: '42' },
          { value: '43' },
          { value: '22' },
        ],
      },
    ],
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
  };
}
