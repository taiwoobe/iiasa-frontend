import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from  '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ContributionsComponent } from './pages/contributions/contributions.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { ModalContentComponent } from './components/modal-content/modal-content.component';



@NgModule({
  declarations: [
    AppComponent,
    ContributionsComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FullLayoutComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB75SIkbYO4J5kEKxLqWwRRbc_tZ09Kkq0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalContentComponent ]
})
export class AppModule { }
