import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bible';

  updateAvailable = false;

  constructor(private updates: SwUpdate,
              public router: Router,) {

    // apply dark theme if set in storage
    if (localStorage.getItem('theme') == 'dark') {
      document.documentElement.setAttribute('dataTheme', 'dark');
    }
    
    this.updates.available.subscribe((event) => {
      this.updateAvailable = true;
      console.log('update avaiable');

    });
  }
  /* THIS DOESN'T FIX THE PROBLEM 
  @HostListener('window:beforeunload')
  async ngOnDestroy() {
  // Change route on reload as static server doesn't deal well with book/:id route
  this.router.navigate(['/book']);
  } */
}

