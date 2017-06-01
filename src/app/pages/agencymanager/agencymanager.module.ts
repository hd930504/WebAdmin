import { NgModule } from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { AgencyaccountComponent } from './components/agencyaccount/agencyaccount.component';
import { AgencystaffComponent } from './components/agencystaff/agencystaff.component';
import { AgencybusinessComponent } from './components/agencybusiness/agencybusiness.component';
import { routing } from './agencymanager.routing';
import { AgencyManagerMain } from './agencymanager.main';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

//services
import {agencyServices} from './services'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    NgbModule
  ],
  declarations: [
    AgencybusinessComponent,
    AgencystaffComponent,
    AgencyaccountComponent,
    AgencyManagerMain
  ],
  providers:[
    agencyServices
  ]
})
export class AgencymanagerModule { }
