import { Component, OnInit, AfterViewInit, HostListener, AfterContentInit } from '@angular/core';
import { BibleService } from '../bible.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit, AfterViewInit, AfterContentInit {

  public bookNameDisplay: any;

  private bookStorage = Number(localStorage.getItem('currentBookIndex'));
  private testamentStorage = Number(localStorage.getItem('currentTestamentIndex'));


  constructor( public bibleService: BibleService,
               private title: Title) { 
    
    // reset scroll position if new book selected                
    if ((this.bibleService.title != (this.bibleService.bible[this.testamentStorage].books[this.bookStorage].bookName )) || (localStorage.getItem('chapterCurrent') == null)){
      localStorage.setItem('scrollYPosition', '0');
      localStorage.setItem('chapterCurrent', '1');
    } 
    // change tab title on load
    let tabTitle = (this.bibleService.title).concat(' ',localStorage.getItem('chapterCurrent'));
    this.title.setTitle(tabTitle);
  }    

  ngOnInit() {
    // store book for loading on return
    localStorage.setItem( 'currentBookIndex', (this.bibleService.bookSelected).toString());
    localStorage.setItem( 'currentTestamentIndex', (this.bibleService.testament).toString());
  }
  ngAfterContentInit() {
    //this needs to be here to stop error - according to stackoverflow; however it does not stop the error - still works though(?)
    this.bibleService.showChapters = true;

  }
  ngAfterViewInit() {
    // get scroll position (Y offset) from local storage and scroll to it
    window.scroll(0, Number(localStorage.getItem('scrollYPosition')));
  }
  
  @HostListener('window:scroll', []) scrolled() {    
    // change chapter numbers in tab title as scrolling
    let tabTitle = (this.bibleService.title).concat(' ',localStorage.getItem('chapterCurrent'));
    this.title.setTitle(tabTitle);
    // store scroll position 
    localStorage.setItem('scrollYPosition', window.pageYOffset.toString());
  }
/*  @HostListener('window:beforeunload')
    async ngOnDestroy() {
    // store scroll position 
    localStorage.setItem('scrollYPosition', window.pageYOffset.toString());
    } */
}
