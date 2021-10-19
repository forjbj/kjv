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

    const toggleSwitch = document.getElementById('theme') as HTMLInputElement;
    if (this.historyService.currentTheme == 'dark') {
        toggleSwitch.checked = true;
    }

  }
/* Change theme */
  themeChange(){
      let theme = document.getElementById('theme') as HTMLInputElement;
      let el = document.body;
      if (theme.checked) {
        document.documentElement.setAttribute('dataTheme', 'dark'); 
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('dataTheme', 'light'); 
        localStorage.setItem('theme', 'light');
    }   
    };

}
