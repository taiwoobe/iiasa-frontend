import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';
import { credentials } from '../app/config/constants';

import { AppComponent } from './app.component';
import { ContributionsComponent } from './pages/contributions/contributions.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ModalContentComponent } from './modals/evaluation/modal-content.component';
import { FilterComponent } from './widgets/filter/filter.component';
import { MapComponent } from './widgets/map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    ContributionsComponent,
    HeaderComponent,
    SidebarComponent,
    FullLayoutComponent,
    ModalContentComponent,
    FilterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: credentials.MAP_API_KEY
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent ]
})
export class AppModule { }
