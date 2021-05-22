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

  private bookStorage = Number(localStorage.getItem('currentBookIndex'));
  private testamentStorage = Number(localStorage.getItem('currentTestamentIndex'));


  constructor( public bibleService: BibleService,
               private title: Title,
               @Inject(DOCUMENT) private document: Document) { 

   // title.setTitle(this.bibleService.title);

    // a Bible book needs to be loaded into view;  number is the array index
    if (this.bibleService.title != this.bibleService.bible[this.testamentStorage].books[this.bookStorage].bookName ) {
    // reset scroll position if new book selected;  number is array index
    localStorage.setItem('scrollYPosition', '0');
    localStorage.setItem('chapterCurrent', '1');

    } 
  }    

  ngOnInit() {

    // store book for loading on return
    localStorage.setItem( 'currentBookIndex', (this.bibleService.bookSelected).toString());
    localStorage.setItem( 'currentTestamentIndex', (this.bibleService.testament).toString());
    
  }

  ngAfterViewInit() {

    // load current chapter into view
    const chapterGridCurrent = this.document.querySelectorAll(".chapters");
    chapterGridCurrent[Number(localStorage.getItem('chapterCurrent'))-1].scrollIntoView();

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
    // store scroll position 
    localStorage.setItem('scrollYPosition', window.pageYOffset.toString());
    
    // change chapter numbers in tab title as scrolling
    let tabTitle = (this.bibleService.title).concat(' ',localStorage.getItem('chapterCurrent'));
    this.title.setTitle(tabTitle);

  }

}
