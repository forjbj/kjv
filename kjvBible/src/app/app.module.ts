import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { TestamentsComponent } from './testaments/testaments.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { TheBibleComponent } from './the-bible/the-bible.component';
import { UpdateToasterComponent } from './update-toaster/update-toaster.component';
import { MenuComponent } from './menu/menu.component';
import { ChapterNumbersComponent } from './chapter-numbers/chapter-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    TestamentsComponent,
    DisplayBookComponent,
    TheBibleComponent,
    UpdateToasterComponent,
    MenuComponent,
    ChapterNumbersComponent,
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
