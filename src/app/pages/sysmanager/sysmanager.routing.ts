import { Routes, RouterModule }  from '@angular/router';

import { UserlistComponent } from './components/userlist/userlist.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { SyslistComponent } from './components/syslist/syslist.component';
import { SyseditComponent } from './components/sysedit/sysedit.component';
import { RolelistComponent } from './components/rolelist/rolelist.component';
import { RoleeditComponent } from './components/roleedit/roleedit.component';
import { SysManagerMain} from './sysmanager.main'
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: SysManagerMain,
    children: [
        { path: 'userlist', component: UserlistComponent },
        { path: 'useredit', component: UsereditComponent },
        { path: 'rolelist', component: RolelistComponent },
        { path: 'roleedit', component: RoleeditComponent },
        { path: 'syslist', component:  SyslistComponent},
        { path: 'sysedit', component: SyseditComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
