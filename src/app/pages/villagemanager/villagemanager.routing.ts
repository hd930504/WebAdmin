import { Routes, RouterModule } from '@angular/router';

import { VillagelistComponent,VillageeditComponent,VillagemapComponent } from './components';
import { VillageManagerMain} from './villagemanager.main'
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: VillageManagerMain,
    children: [
        { path: 'villagelist', component: VillagelistComponent },
        { path: 'villageedit', component: VillageeditComponent },
        { path: 'villagemap', component: VillagemapComponent},
        { path: '**',redirectTo:'villagelist'}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
