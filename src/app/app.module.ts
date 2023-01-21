import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import 'hammerjs';
import { TimelineModule } from 'primeng/timeline';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { GasStationComponent } from './gas-station/gas-station.component';
import { HttpService } from './services/http.service';
import { NetworkAwarePreloadingStrategyService2Service } from './services/network-aware-preloading-strategy.service';

@NgModule({
  declarations: [AppComponent, GasStationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TimelineModule,
    ButtonModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [
    HttpService,
    AuthService,
    NetworkAwarePreloadingStrategyService2Service,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
