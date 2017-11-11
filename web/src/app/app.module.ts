import { routing } from './modules/app-router/app-router.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppMenuComponent } from './components/app-menu/app-menu.component';
import { HomeComponent } from './components/home/home.component';
import { InscriptionComponent } from './components/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    HomeComponent,
    InscriptionComponent 
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
