import { Injectable } from '@angular/core';
import { BibleService } from './bible.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public currentTheme:string;

  public currentBookMenu: string;
  public secondBookMenu: string;
  public thirdBookMenu: string;

// Store books in HTML for quick reload
/*  public menuBook: string;         
  public currentBook: string;     BROKEN: WILL WORK BUT CSS WILL NOT LOAD ON RELOADING WEBPAGE AND THEN USING HISTORY - NO IDEA - TODO
  public secondBook: string;      
  public thirdBook: string; */

  public currentChapter: string;
  public currentSavedChapter: string;
  public secondSavedChapter: string;
  public thirdSavedChapter: string;
  public currentScrollYPostion: string;
  public secondScrollYPosition: string;
  public thirdScrollYPosition: string;

  public currentBookArray: string;
  public currentTestamentArray: string;
  public secondBookArray: string;
  public secondTestamentArray: string;
  public thirdBookArray: string;
  public thirdTestamentArray: string;

  constructor( public bibleService: BibleService,
              public router: Router) { } 

  menuBooks() {
    this.currentTheme =  localStorage.getItem('theme');
    
    this.currentBookMenu = this.bibleService.bible[Number(localStorage.getItem('currentTestamentIndex'))].books[Number(localStorage.getItem('currentBookIndex'))].bookName
    + ' '  + localStorage.getItem('currentChapter') ;
  // this.currentBook = localStorage.getItem('currentBookHTML');
    if (localStorage.getItem('secondTestamentIndex') != null) {
      this.secondBookMenu = this.bibleService.bible[Number(localStorage.getItem('secondTestamentIndex'))].books[Number(localStorage.getItem('secondBookIndex'))].bookName
      + ' ' + localStorage.getItem('secondSavedChapter') ;
  //   this.secondBook = localStorage.getItem('secondBookHTML');
    }
    if (localStorage.getItem('thirdTestamentIndex') != null) {
      this.thirdBookMenu = this.bibleService.bible[Number(localStorage.getItem('thirdTestamentIndex'))].books[Number(localStorage.getItem('thirdBookIndex'))].bookName
      + ' ' + localStorage.getItem('thirdSavedChapter') ;
  //   this.thirdBook = localStorage.getItem('thirdBookHTML');
    }
  }

  rearrangeBooks(book:string) {

    this.bibleService.menuHistoryBook = true;

    switch (book) {
      case 'current':
  //      this.menuBook = this.currentBook;
        break;
      
      case 'second':
        this.currentTestamentArray = localStorage.getItem('currentTestamentIndex');
        this.currentBookArray = localStorage.getItem('currentBookIndex');
        this.currentChapter = localStorage.getItem('currentChapter');
        this.currentScrollYPostion = localStorage.getItem('currentScrollY');
  //      this.currentBook= localStorage.getItem('currentBookHTML');
        this.secondTestamentArray= localStorage.getItem('secondTestamentIndex');
        this.secondBookArray = localStorage.getItem('secondBookIndex');
        this.secondSavedChapter = localStorage.getItem('secondSavedChapter');
        this.secondScrollYPosition = localStorage.getItem('secondScrollYSaved');
  //      this.secondBook = localStorage.getItem('secondBookHTML');

        this.bibleService.testament = Number(this.secondTestamentArray);
        this.bibleService.bookSelected = Number(this.secondBookArray);
        localStorage.setItem('currentChapter', this.secondSavedChapter);
        localStorage.setItem('currentScrollY', this.secondScrollYPosition);
  //      localStorage.setItem('currentBookHTML', this.secondBook); 

        localStorage.setItem('secondTestamentIndex', this.currentTestamentArray);
        localStorage.setItem('secondBookIndex', this.currentBookArray);
        localStorage.setItem('secondSavedChapter', this.currentChapter);
        localStorage.setItem('secondScrollYSaved', this.currentScrollYPostion);
  //      localStorage.setItem('secondBookHTML', this.currentBook);

  //      this.menuBook = this.secondBook;
        break;
        
      case 'third':
        this.currentTestamentArray = localStorage.getItem('currentTestamentIndex');
        this.currentBookArray = localStorage.getItem('currentBookIndex');
        this.currentChapter = localStorage.getItem('currentChapter');
        this.currentScrollYPostion = localStorage.getItem('currentScrollY');
  //      this.currentBook= localStorage.getItem('currentBookHTML');
        this.secondTestamentArray= localStorage.getItem('secondTestamentIndex');
        this.secondBookArray = localStorage.getItem('secondBookIndex');
        this.secondSavedChapter = localStorage.getItem('secondSavedChapter');
        this.secondScrollYPosition = localStorage.getItem('secondScrollYSaved');
  //      this.secondBook = localStorage.getItem('secondBookHTML');
  //      this.thirdBook = localStorage.getItem('thirdBookHTML');

        this.bibleService.testament = Number(localStorage.getItem('thirdTestamentIndex'));
        this.bibleService.bookSelected = Number(localStorage.getItem('thirdBookIndex'));
        localStorage.setItem('currentChapter', localStorage.getItem('thirdSavedChapter'));
        localStorage.setItem('currentScrollY', localStorage.getItem('thirdScrollYSaved'));
  //      localStorage.setItem('currentBookHTML', this.thirdBook );

        localStorage.setItem('secondTestamentIndex', this.currentTestamentArray);
        localStorage.setItem('secondBookIndex', this.currentBookArray);
        localStorage.setItem('secondSavedChapter', this.currentChapter);
        localStorage.setItem('secondScrollYSaved', this.currentScrollYPostion);
  //      localStorage.setItem('secondBookHTML', this.currentBook);

        localStorage.setItem('thirdTestamentIndex', this.secondTestamentArray);
        localStorage.setItem('thirdBookIndex', this.secondBookArray);
        localStorage.setItem('thirdSavedChapter', this.secondSavedChapter);
        localStorage.setItem('thirdScrollYSaved', this.secondScrollYPosition);
  //      localStorage.setItem('thirdBookHTML', this.secondBook);

  //      this.menuBook = this.thirdBook;
        break;
    };
    this.bibleService.title = this.bibleService.bible[this.bibleService.testament].books[this.bibleService.bookSelected].bookName;
    localStorage.setItem('currentTestamentIndex', (this.bibleService.testament).toString());
    localStorage.setItem('currentBookIndex', (this.bibleService.bookSelected).toString());

    this.bibleService.showChapters = false;
    this.bibleService.displayMenu = false;
    
    //hack to force angular to reload with the above parameters - route to '/' then back
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      //Below works, however gives an error code 404 from static server (github pages) on reload - fix applied in app.component.ts
      this.router.navigate(['/book', this.bibleService.title]);  
    }); 
  }

  newBook() {
  // reset scroll position if new book selected                
    if ((this.bibleService.title != (this.bibleService.bible[Number(localStorage.getItem('currentTestamentIndex'))]
                                      .books[Number(localStorage.getItem('currentBookIndex'))].bookName ) ) 
                                    || (localStorage.getItem('currentChapter') == null) ) {
        localStorage.setItem('currentScrollY', '0');
        localStorage.setItem('currentChapter', '1');  
        this.bibleService.showChapters = true;
    } 
  }

  savePosition() {
    localStorage.setItem('ScrollYSaved', localStorage.getItem('currentScrollY'));
    localStorage.setItem('currentSavedChapter', localStorage.getItem('currentChapter'));
  }

  storeBooks() {
    // only execute if not selected from history
    if (this.bibleService.menuHistoryBook == false) {

  //    this.currentBook = localStorage.getItem('currentBookHTML');
  //    this.secondBook = localStorage.getItem('secondBookHTML');

      this.currentBookArray = localStorage.getItem('currentBookIndex');
      this.currentTestamentArray = localStorage.getItem('currentTestamentIndex');
      this.secondBookArray = localStorage.getItem('secondBookIndex');
      this.secondTestamentArray = localStorage.getItem('secondTestamentIndex');
      this.currentScrollYPostion = localStorage.getItem('ScrollYSaved');
      this.secondScrollYPosition = localStorage.getItem('secondScrollYSaved');

      this.currentSavedChapter = localStorage.getItem('currentSavedChapter');
      this.secondSavedChapter = localStorage.getItem('secondSavedChapter');

      if (this.bibleService.bookSelected != Number(this.currentBookArray) 
          || this.bibleService.testament != Number(this.currentTestamentArray) ) { 
        if (this.secondTestamentArray != null) {
          localStorage.setItem('thirdTestamentIndex', this.secondTestamentArray);
          localStorage.setItem('thirdBookIndex', this.secondBookArray);
          localStorage.setItem('thirdScrollYSaved', this.secondScrollYPosition);
          localStorage.setItem('thirdSavedChapter', this.secondSavedChapter);
  //        localStorage.setItem('thirdBookHTML', this.secondBook);
        }
        localStorage.setItem('secondTestamentIndex', this.currentTestamentArray);
        localStorage.setItem('secondBookIndex', this.currentBookArray);
        localStorage.setItem('secondScrollYSaved', this.currentScrollYPostion);
        localStorage.setItem('secondSavedChapter', this.currentSavedChapter);
  //      localStorage.setItem('secondBookHTML', this.currentBook);
      }
      // The following need to be here or history won't originally populate
      localStorage.setItem('currentTestamentIndex', (this.bibleService.testament).toString());
      localStorage.setItem('currentBookIndex', (this.bibleService.bookSelected).toString());
  //    localStorage.setItem('currentBookHTML', document.getElementById('currentBook').outerHTML);
    }
  }
}
