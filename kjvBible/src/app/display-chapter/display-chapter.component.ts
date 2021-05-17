import { Component, OnInit, AfterViewInit, HostListener, Inject } from '@angular/core';
import { BibleService } from '../bible.service';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-display-chapter',
  templateUrl: './display-chapter.component.html',
  styleUrls: ['./display-chapter.component.scss']
})
export class DisplayChapterComponent implements OnInit, AfterViewInit {

  public bookNameDisplay: any;


  constructor( public bibleService: BibleService,
               private title: Title,
               @Inject(DOCUMENT) private document: Document) { 

    title.setTitle(this.bibleService.title);

  
    this.bibleService.title = this.bibleService.bible[this.bibleService.testament].books[this.bibleService.bookSelected].bookName;
    // a Bible book needs to be loaded into view;  number is the array index
    if (this.bibleService.loadFromStorage && (this.bibleService.bookSelected === 0 && this.bibleService.testament === 0)) {
      // load book from storage if exists
      if (localStorage.getItem('currentBookIndex') ) {
      const testament = Number(localStorage.getItem('currentTestamentIndex'));
      const book = Number(localStorage.getItem('currentBookIndex'));
      this.bibleService.testament = testament;
      this.bibleService.bookSelected = book;
      this.bibleService.title = this.bibleService.bible[this.bibleService.testament].books[this.bibleService.bookSelected].bookName;
      } else {
      // load something
      this.bibleService.title = this.bibleService.bible[0].books[0].bookName;
      this.bibleService.testament = 0;
      this.bibleService.bookSelected = 0;

      // reset scroll position if no book in storage
      localStorage.setItem('scrollYPosition', '0');
      }
    }
    // reset scroll position if new book selected;  number is array index
    if ((this.bibleService.bookSelected !== Number(localStorage.getItem('currentBookIndex'))) ||
    (this.bibleService.testament !== Number(localStorage.getItem('currentTestamentIndex')))) {
    localStorage.setItem('scrollYPosition', '0');
    localStorage.setItem('chapterCurrent', '1');
    }

  } 
    

  ngOnInit() {

    // store book for loading on return
    localStorage.setItem( 'currentBookIndex', (this.bibleService.bookSelected).toString());
    localStorage.setItem( 'currentTestamentIndex', (this.bibleService.testament).toString());

    // load current chapter into view
    const chapterGridCurrent = this.document.querySelectorAll(".chapters");
    chapterGridCurrent[Number(localStorage.getItem('chapterCurrent'))-1].scrollIntoView();
    
  }

  ngAfterViewInit() {

    // get scroll position (Y offset) from local storage and scroll to it
    window.scroll(0, Number(localStorage.getItem('scrollYPosition')));

    // highlight chapters on scroll
    const chapters = this.document.querySelectorAll("section");
    const chaptersGrid = this.document.querySelectorAll(".chapters");
    // chaptersGrid[Number(localStorage.getItem('chapterCurrent'))-1].scrollIntoView();
    const options = {
      root: null, // viewport
      threshold: 0,
      rootMargin: "-20%"
    };
      const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        let chapter = entry.target.querySelector("div").id;
        if (entry.isIntersecting) {
          chaptersGrid[Number(chapter)-1].classList.add("chapterScroll");
          //keep current chapter
          localStorage.setItem('chapterCurrent', chapter);
        }
        else {
          chaptersGrid[Number(chapter)-1].classList.remove("chapterScroll");
        }
      });
    },options);
      chapters.forEach(chapter=> {
      observer.observe(chapter);
    })
    }
  
  @HostListener('window:scroll', []) scrolled() {
    localStorage.setItem('scrollYPosition', window.pageYOffset.toString());
  }

}
