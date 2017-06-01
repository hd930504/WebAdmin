import { NgModule } from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { routing } from './memmanager.routing';
import { MemmanagerMain } from './memmanager.main';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'angular2-highcharts';
//services
import { AgencyeditComponent ,AgencylistComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    NgbModule,
    // ChartModule.forRoot(require('highcharts'))
  ],
  declarations: [
    AgencyeditComponent,
    AgencylistComponent,
    MemmanagerMain,
  ],
  providers:[
  ]
})
export class MemmanagerModule { }
