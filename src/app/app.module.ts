import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { BaseFormComponent } from './shared/components/base-form/base-form.component';
import {HomeComponent} from "./public/pages/home/home.component";
import {HttpClientModule} from "@angular/common/http";
import {MatToolbar} from "@angular/material/toolbar";
import { PerfumeCustomizerComponent } from './AromaPropio/pages/perfume-customizer/perfume-customizer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    HomeComponent,
    PageNotFoundComponent,
    HomeComponent,
    PerfumeCustomizerComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatToolbar,
    ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
