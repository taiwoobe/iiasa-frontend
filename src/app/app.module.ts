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
import { EvaluationModalComponent } from './modals/evaluation-modal/evaluation-modal.component';
import { FilterComponent } from './widgets/filter/filter.component';
import { MapComponent } from './widgets/map/map.component';
import { ContributionComponent } from './widgets/contribution/contribution.component';
import { ContributionCarouselComponent } from './widgets/contribution-carousel/contribution-carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    ContributionsComponent,
    HeaderComponent,
    SidebarComponent,
    FullLayoutComponent,
    EvaluationModalComponent,
    FilterComponent,
    MapComponent,
    ContributionComponent,
    ContributionCarouselComponent
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
  entryComponents: [ EvaluationModalComponent ]
})
export class AppModule { }
