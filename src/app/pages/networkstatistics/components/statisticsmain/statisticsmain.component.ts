import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'statistics-statisticsmain',
  templateUrl: './statisticsmain.component.html',
  styleUrls: ['./statisticsmain.component.scss']
})

export class StatisticsmainComponent {
  
  // options: Object;
  title:string = "这是标题"
  constructor (private router: Router){
   
  }

  goMeiriwangqian(){
  	this.router.navigateByUrl('/pages/networkstatistics/meiriwangqian')
  	 // this.router.navigate(['/pages/networkstatistics/meiriwangqian']);
  }

  goNetanalysis(){
  	this.router.navigateByUrl('/pages/networkstatistics/netanalysis')
  }

  goStaffmanage(){
  	this.router.navigateByUrl('/pages/networkstatistics/staffmanage')
  }

  // ngOnInit() {
  //   this.options = {
  //     title : { text : 'simple chart' },
  //     series: [{
  //         name: '东京',
  //         data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
  //     }, {
  //         name: '伦敦',
  //         data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
  //     }],
  //     subtitle: {
  //           text: '数据来源: WorldClimate.com'
  //       },
  //       xAxis: {
  //           categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  //       },
  //       yAxis: {
  //           title: {
  //               text: '气温 (°C)'
  //           }
  //       },
  //       plotOptions: {
  //           line: {
  //               dataLabels: {
  //                   enabled: true          // 开启数据标签
  //               },
  //               enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
  //           }
  //       }
  //   }

  // }
  
}

// export class StatisticsmainComponent implements OnInit {

//   constructor() {
    
//   }

  

// }
