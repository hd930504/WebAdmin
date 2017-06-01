import { NgModule } from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { SyslistComponent } from './components/syslist/syslist.component';
import { SyseditComponent } from './components/sysedit/sysedit.component';
import { RolelistComponent } from './components/rolelist/rolelist.component';
import { RoleeditComponent } from './components/roleedit/roleedit.component';
import { routing } from './sysmanager.routing';
import { SysManagerMain } from './sysmanager.main';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

//services
import {sysServices} from './services'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    NgbModule
  ],
  declarations: [
    UserlistComponent, UsereditComponent, SyslistComponent, SyseditComponent, RolelistComponent, 
    RoleeditComponent,SysManagerMain
  ],
  providers:[
    sysServices
  ]
})
export class SysmanagerModule { }
