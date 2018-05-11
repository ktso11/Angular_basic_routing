import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { InfoWindowComponent } from './info-window/info-window.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    TieFighterComponent,
    InfoWindowComponent
  ],
  imports: [
    BrowserModule,
    InternalDefensesModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
