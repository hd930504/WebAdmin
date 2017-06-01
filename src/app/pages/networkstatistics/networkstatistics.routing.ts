import { Routes, RouterModule }  from '@angular/router';

// 
import { NetworkStatisticsMain} from './networkstatistics.main'

import { StatisticsmainComponent, EverydayComponent, NetanalysisComponent, StaffmanageComponent } from './components';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: NetworkStatisticsMain,
    children: [
        { path: 'main', component: StatisticsmainComponent },
        { path: 'meiriwangqian', component: EverydayComponent },
        { path: 'netanalysis', component: NetanalysisComponent },
        { path: 'staffmanage', component: StaffmanageComponent },
        { path: '**',redirectTo:'main'  }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
