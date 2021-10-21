import { Component, AfterViewInit, HostListener, Inject } from '@angular/core';
import { BibleService } from '../bible.service';
import { HistoryService } from '../history.service';
import { Title, DomSanitizer } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements AfterViewInit {

  constructor( public bibleService: BibleService,
               public historyService: HistoryService,
               private title: Title,
               public domSanitizer: DomSanitizer,
               @Inject(DOCUMENT) private document: Document, ) { 
    
    this.historyService.newBook();
  }    

  ngAfterViewInit() {

    window.scroll(0, Number(localStorage.getItem('currentScrollY')));

    // store book for loading on return, if not chosen from history -MUST BE UNDER ngAfterViewInit 
    this.historyService.storeBooks();
    
    // change tab title on load
    let tabTitle = (this.bibleService.title).concat(' ',localStorage.getItem('currentChapter'));
    this.title.setTitle(tabTitle);
  
    // save visible chapter as current
    const chapters = this.document.querySelectorAll("section");
    const options = {
      root: null, // viewport
      threshold: [0],
      rootMargin: "-50%" //save whichever chapter is 50% in view
    };
    const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      let chapter = entry.target.querySelector("div").id;         
      if (entry.isIntersecting) {
        //keep current chapter
        localStorage.setItem('currentChapter', chapter);  
      }
    });
    },options);
      chapters.forEach(chapter=> {
      observer.observe(chapter);
    })
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
