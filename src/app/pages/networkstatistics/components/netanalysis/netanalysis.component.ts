import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-netanalysis',
  templateUrl: './netanalysis.component.html',
  styleUrls: ['./netanalysis.component.scss']
})
export class NetanalysisComponent implements OnInit {
  scale:Object;
  price:Object;
  amount:Object;
  whole:Object;
  area:Object;
  roomage:Object;
// <<<<<<< HEAD
  acreage:Object;
  unitPrice:Object;
  total:Object;
  customize:Object;
// =======
  bSTitle:boolean = false;
// >>>>>>> d2073ec4790e92916f1b4042058292f31b176bac
  constructor() { }

  ngOnInit() {

    // 规模走势图表
  	this.scale = {
      chart : {
        type : 'column'
      },
      title : { 
        text : ''
      },
      series: [{
          name: '住宅',
          data: [3000, 8000, 6000, 3000, 5000, 7000, 3000, 10000],
          color: '#4f81bd'
      }, {
          name: '非住宅',
          data: [5000, 7000, 3000, 8000, 6000, 3000, 5000, 7000],
          color: "#c0504d"
      }],
      subtitle: {
            text: ''
        },
      legend: {
        y: -330,
        floating: true
      },
      xAxis: {
          categories: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年']
      },
      yAxis: {
          title: {
              text: ''
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true          // 开启数据标签
              },
              enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
          }
      }
    }

    // 价格走势图表
    this.price = {
      title : { 
        text : ''
      },
      series: [{
          name: '住宅',
          data: [3000, 5000, 6000, 7000, 5000, 7000, 3000, 4000],
          color: '#4f81bd'
      }, {
          name: '非住宅',
          data: [5000, 4000, 5000, 6000, 6000, 4000, 5000, 6000],
          color: "#c0504d"
      }],
      subtitle: {
            text: ''
        },
      legend: {
        y: 10,
        verticalAlign: 'top',
        floating: true
      },
      xAxis: {
          categories: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年']
      },
      yAxis: {
          title: {
              text: ''
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true          // 开启数据标签
              },
              enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
          }
      }
    }

    // 金额走势图表
    this.amount = {
      chart : {
        type : 'column'
      },
      title : { 
        text : ''
      },
      series: [{
          name: '住宅',
          data: [3000, 8000, 6000, 3000, 5000, 7000, 3000, 10000],
          color: '#4f81bd'
      }, {
          name: '非住宅',
          data: [5000, 7000, 3000, 8000, 6000, 3000, 5000, 7000],
          color: "#c0504d"
      }],
      subtitle: {
            text: ''
        },
      legend: {
        y: -330,
        floating: true
      },
      xAxis: {
          categories: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年']
      },
      yAxis: {
          title: {
              text: ''
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true          // 开启数据标签
              },
              enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
          }
      }
    }

    // 价格走势图表
    this.whole = {
      title : { 
        text : ''
      },
      series: [{
          name: '住宅',
          data: [3000, 5000, 6000, 7000, 5000, 7000, 3000, 4000],
          color: '#4f81bd'
      }, {
          name: '非住宅',
          data: [5000, 4000, 5000, 6000, 6000, 4000, 5000, 6000],
          color: "#c0504d"
      }],
      subtitle: {
            text: ''
        },
      legend: {
        y: 10,
        verticalAlign: 'top',
        floating: true
      },
      xAxis: {
          categories: ['2010年', '2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年']
      },
      yAxis: {
          title: {
              text: ''
          }
      },
      plotOptions: {
          line: {
              dataLabels: {
                  enabled: true          // 开启数据标签
              },
              enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
          }
      }
    }

    // 区域结构图表
    this.area = {
      chart: {
          zoomType: 'xy'
      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      xAxis: [{
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          crosshair: true
      }],
      yAxis: [{ // Primary yAxis
          labels: {
              format: '{value}°C',
              style: {
                  // color: Highcharts.getOptions().colors[1]
              }
          },
          title: {
              text: '套数',
              style: {
                  // color: Highcharts.getOptions().colors[1]
              }
          }
      }, { // Secondary yAxis
          title: {
              text: '单价',
              style: {
                  // color: Highcharts.getOptions().colors[0]
              }
          },
          labels: {
              format: '{value}',
              style: {
                  // color: Highcharts.getOptions().colors[0]
              }
          },
          opposite: true
      }],
      tooltip: {
          shared: true
      },
      legend: {
          verticalAlign: 'top',
          y: 10,
          floating: true,
          // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
      },
      series: [{
          name: '套数',
          type: 'column',
          yAxis: 1,
          data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
          tooltip: {
              valueSuffix: ''
          },
          color: '#4f81bd'
      }, {
          name: '单价',
          type: 'spline',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
          tooltip: {
              valueSuffix: ''
          },
          color: '#c0504d'
      }]
    }

    // 房龄结构图表
    this.roomage = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: ''
      },
      tooltip: {
          headerFormat: '{series.name}<br>',
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              },
              showInLegend: true
          }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        y: -50
      },
      series: [{
          type: 'pie',
          name: '房龄结构',
          data: [
              ['5-10年',   40.0],
              ['5年以内',  29.8],
              ['10-20年',  24],
              ['20年以上',  6.2],
          ]
      }]
    }

    // 房龄结构图表
    this.acreage = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: ''
      },
      tooltip: {
          headerFormat: '{series.name}<br>',
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              },
              showInLegend: true
          }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        y: -50
      },
      series: [{
          type: 'pie',
          name: '房龄结构',
          data: [
              ['5-10年',   40.0],
              ['5年以内',  29.8],
              ['10-20年',  24],
              ['20年以上',  6.2],
          ]
      }]
    }

    // 单价结构图表
    this.unitPrice = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: ''
      },
      tooltip: {
          headerFormat: '{series.name}<br>',
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              },
              showInLegend: true
          }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        y: -50
      },
      series: [{
          type: 'pie',
          name: '房龄结构',
          data: [
              ['5-10年',   40.0],
              ['5年以内',  29.8],
              ['10-20年',  24],
              ['20年以上',  6.2],
          ]
      }]
    }

    // 总价结构图表
    this.total = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: ''
      },
      tooltip: {
          headerFormat: '{series.name}<br>',
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              },
              showInLegend: true
          }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        y: -50
      },
      series: [{
          type: 'pie',
          name: '房龄结构',
          data: [
              ['5-10年',   40.0],
              ['5年以内',  29.8],
              ['10-20年',  24],
              ['20年以上',  6.2],
          ]
      }]
    }

    // 自定义查询图表
    this.customize = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false
      },
      title: {
          text: ''
      },
      tooltip: {
          headerFormat: '{series.name}<br>',
          pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                  style: {
                      // color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                  }
              },
              showInLegend: true
          }
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        y: -50
      },
      series: [{
          type: 'pie',
          name: '房龄结构',
          data: [
              ['5-10年',   40.0],
              ['5年以内',  29.8],
              ['10-20年',  24],
              ['20年以上',  6.2],
          ]
      }]
    }


  }

  // 默认显示项
  selItem : Number = 0;
  selectItem : Number = 0;
  onItemClick(type) {
    this.selItem = type;

  }

  onSelectClick(type) {
    this.selectItem = type;
  }


}
