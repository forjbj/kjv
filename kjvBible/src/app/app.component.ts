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
    
    this.updates.available.subscribe((event) => {
      console.log('avaiable!');
      this.updateAvailable = true;
    });
  }

}

