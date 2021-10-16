import { Component, OnInit, AfterViewInit, HostListener, AfterContentInit } from '@angular/core';
import { BibleService } from '../bible.service';
import { HistoryService } from '../history.service';
import { Title, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit, AfterViewInit, AfterContentInit {

  constructor( public bibleService: BibleService,
               public historyService: HistoryService,
               private title: Title,
               public domSanitizer: DomSanitizer) { 
    
    this.historyService.newBook();
  }    

  ngOnInit() { }

  ngAfterContentInit() {
  }

  ngAfterViewInit() {

    window.scroll(0, Number(localStorage.getItem('currentScrollY')));

    // store book for loading on return, if not chosen from history -MUST BE UNDER ngAfterViewInit 
    this.historyService.storeBooks();
    
    // change tab title on load
    let tabTitle = (this.bibleService.title).concat(' ',localStorage.getItem('currentChapter'));
    this.title.setTitle(tabTitle);
  }
  
  @HostListener('window:scroll', []) scrolled() {    
    // change chapter numbers in tab title as scrolling
    let tabTitle = (this.bibleService.title).concat(' ',localStorage.getItem('currentChapter'));
    this.title.setTitle(tabTitle);

    localStorage.setItem('currentScrollY', window.pageYOffset.toString());
  }
  @HostListener('window:beforeunload')
    async ngOnDestroy() {
    // store scroll position and chapter on exit
    this.historyService.savePosition();
    } 
}
