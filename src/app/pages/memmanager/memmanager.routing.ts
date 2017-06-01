import { Routes, RouterModule }  from '@angular/router';
// 
import { MemmanagerMain} from './memmanager.main'

import { AgencyeditComponent ,AgencylistComponent} from './components';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: MemmanagerMain,
    children: [
        { path: 'agencyelist', component: AgencylistComponent },
        { path: 'agencyedit', component: AgencyeditComponent },
        { path: '**',redirectTo:'agencyelist'  }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
