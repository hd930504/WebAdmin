import { NgModule } from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { routing } from './networkstatistics.routing';
import { NetworkStatisticsMain } from './networkstatistics.main';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
//services
import { StatisticsmainComponent } from './components/statisticsmain/statisticsmain.component';
import { EverydayComponent } from './components/everyday/everyday.component';
import { NetanalysisComponent } from './components/netanalysis/netanalysis.component';
import { StaffmanageComponent } from './components/staffmanage/staffmanage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    NgbModule,
    ChartModule.forRoot(require('highcharts'))
  ],
  declarations: [
    NetworkStatisticsMain,
    StatisticsmainComponent,
    EverydayComponent,
    NetanalysisComponent,
    StaffmanageComponent
  ],
  providers:[
  ]
})
export class NetworkStatisticsModule { 

}
