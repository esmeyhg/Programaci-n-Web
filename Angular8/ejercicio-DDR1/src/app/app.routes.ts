import { Routes, RouterModule } from '@angular/router';
import { Comp2 } from './component2/comp2.component';
import { Comp1 } from './component1/comp1.component';

const APP_ROUTES: Routes = [
    {path: '', component: Comp1},
    {path: 'comp2', component: Comp2},
    {path: '**', redirectTo: ''}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);