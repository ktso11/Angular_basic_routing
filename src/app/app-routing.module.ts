import { TurretComponent } from './internal-defenses/turret/turret.component';
import { InfoWindowComponent } from './info-window/info-window.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';

const routes: Routes = [
    {
        path: 'info/:id',
        component: InfoWindowComponent
      }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}