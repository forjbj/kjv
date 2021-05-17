import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { TestamentComponent } from './testament/testament.component';
import { DisplayChapterComponent } from './display-chapter/display-chapter.component';
import { TheBibleComponent } from './the-bible/the-bible.component';

@NgModule({
  declarations: [
    AppComponent,
    TestamentComponent,
    DisplayChapterComponent,
    TheBibleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
