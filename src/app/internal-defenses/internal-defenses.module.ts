import { AppRoutingModule } from './../app-routing.module';

import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurretComponent } from './turret/turret.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent
  ],
  exports: [
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent
  ]

})
export class InternalDefensesModule { }
