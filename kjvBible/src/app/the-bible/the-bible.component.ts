import { AfterContentInit, Component, OnInit } from '@angular/core';
import { BibleService } from '../bible.service';
import { HistoryService } from '../history.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-the-bible',
  templateUrl: './the-bible.component.html',
  styleUrls: ['./the-bible.component.scss']
})

export class TheBibleComponent implements OnInit, AfterContentInit {


  constructor(public bibleService: BibleService,
              public historyService: HistoryService,
              private meta: Meta,
              private title: Title
              ) {
    
    title.setTitle('Bible');
    this.meta.addTag({ name: 'description', content: 'Bible - King James Version'});
/* Dark mode theme TODO -THIS CODE WORKS DON'T REMOVE */

    if (this.bibleService.currentTheme) {
      document.documentElement.setAttribute('data-theme', this.bibleService.currentTheme); // THIS MAY NEED CHANGING TO WORK? CSS OR SCSS?
    }

  } 

  ngOnInit() { 

  }
  ngAfterContentInit() {

  }
}
