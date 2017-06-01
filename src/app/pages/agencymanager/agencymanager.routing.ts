import { Routes, RouterModule }  from '@angular/router';

import { AgencyaccountComponent } from './components/agencyaccount/agencyaccount.component';
import { AgencystaffComponent } from './components/agencystaff/agencystaff.component';
import { AgencybusinessComponent } from './components/agencybusiness/agencybusiness.component';
import { AgencyManagerMain} from './agencymanager.main'
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: AgencyManagerMain,
    children: [
        { path: 'agencyaccount', component: AgencyaccountComponent },
        { path: 'agencystaff', component: AgencystaffComponent },
        { path: 'agencybusiness', component: AgencybusinessComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
