import { NgModule } from '@angular/core';
import { NgaModule } from '../../theme/nga.module';
import { CommonModule } from '@angular/common';
import { routing } from './villagemanager.routing';
import { VillageManagerMain } from './villagemanager.main';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { VillagelistComponent,VillageeditComponent,VillagemapComponent } from './components';
import { BaiduMapModule } from 'angular2-baidu-map';
import { FileUploadModule } from 'ng2-file-upload';
//services
import { villageServices} from './services'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    NgbModule,
    BaiduMapModule,
    FileUploadModule
  ],
  declarations: [
    VillageManagerMain,
    VillagelistComponent,
    VillageeditComponent,
    VillagemapComponent
  ],
  providers:[
    villageServices
  ]
})
export class VillagemanagerModule { 

}
