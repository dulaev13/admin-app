import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { TopnavComponent } from './shared/topnav/topnav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MainComponent } from './shared/layouts/main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { DefaultComponent } from './shared/views/default/default.component';
import { AnalyticsComponent } from './shared/views/analytics/analytics.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    MainComponent,
    DefaultComponent,
    AnalyticsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
