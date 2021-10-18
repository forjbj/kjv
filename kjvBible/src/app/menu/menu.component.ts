import { Component, OnInit } from '@angular/core';
import { BibleService } from '../bible.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor(public bibleService: BibleService,
              public historyService: HistoryService ) {

    this.historyService.menuBooks();
   }

  ngOnInit(): void {
/* Dark mode theme TODO -THIS CODE WORKS DON'T REMOVE

    const toggleSwitch = document.getElementById('theme') as HTMLInputElement;
    if (this.bibleService.currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
*/
  }
/* Dark mode theme TODO -THIS CODE WORKS DON'T REMOVE 
  themeChange(){
      let theme = document.getElementById('theme') as HTMLInputElement;
      let el = document.body;
      if (theme.checked) {
        document.documentElement.setAttribute('data-theme', 'dark'); // THIS MAY NEED CHANGING TO WORK? CSS OR SCSS?
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light'); // THIS MAY NEED CHANGING TO WORK? CSS OR SCSS?
        localStorage.setItem('theme', 'light');
    }   
    };
*/
}
