import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bible';

  updateAvailable = false;

  constructor(private updates: SwUpdate) {

    // apply dark theme if set in storage
    if (localStorage.getItem('theme') == 'dark') {
      document.documentElement.setAttribute('dataTheme', 'dark');
    }
    
    this.updates.available.subscribe((event) => {
      this.updateAvailable = true;
      console.log('update avaiable');

    });
  }

}

