import { Injectable } from '@angular/core';
import { BibleService } from './bible.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public currentBookMenu: string;
  public secondBookMenu: string;
  public thirdBookMenu: string;
//  public menuBook: string;        // STORING BOOKS IN HTML WORKS, HOWEVER FUNCTIONALITY IS LIMITED DUE TO 'DOM SANITIZER'
//  public currentBook: string;     // i.e. CLICKING ON PAGE (STORED HTML) WON'T CLOSE CHAPTER NUMBERS OR MENU.
//  public secondBook: string;      // TO DO - maybe
//  public thirdBook: string;

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
    this.currentBookMenu = this.bibleService.bible[Number(localStorage.getItem('currentTestamentIndex'))].books[Number(localStorage.getItem('currentBookIndex'))].bookName
    + ' '  + localStorage.getItem('currentChapter') ;
//   this.currentBook = localStorage.getItem('currentBookHTML');
    if (localStorage.getItem('secondTestamentIndex') != null) {
      this.secondBookMenu = this.bibleService.bible[Number(localStorage.getItem('secondTestamentIndex'))].books[Number(localStorage.getItem('secondBookIndex'))].bookName
      + ' ' + localStorage.getItem('secondSavedChapter') ;
//     this.secondBook = localStorage.getItem('secondBookHTML');
    }
    if (localStorage.getItem('thirdTestamentIndex') != null) {
      this.thirdBookMenu = this.bibleService.bible[Number(localStorage.getItem('thirdTestamentIndex'))].books[Number(localStorage.getItem('thirdBookIndex'))].bookName
      + ' ' + localStorage.getItem('thirdSavedChapter') ;
//     this.thirdBook = localStorage.getItem('thirdBookHTML');
    }
  }

  rearrangeBooks(book:string) {

  this.bibleService.menuHistoryBook = true;

  const testament: string = localStorage.getItem('currentTestamentIndex');
  const bookNum: string = localStorage.getItem('currentBookIndex');
  const chapter: string = localStorage.getItem('currentChapter');
  const scroll: string = localStorage.getItem('currentScrollY');
//  const currentBook: string = localStorage.getItem('currentBookHTML');

  const secondTestament: string = localStorage.getItem('secondTestamentIndex');
  const secondBookNum: string = localStorage.getItem('secondBookIndex');
  const secondChapter: string = localStorage.getItem('secondSavedChapter');
  const secondScroll: string = localStorage.getItem('secondScrollYSaved');
//  const secondBook: string = localStorage.getItem('secondBookHTML');

  switch (book) {
    case 'current':
      this.bibleService.testament = Number(testament);
      this.bibleService.bookSelected = Number(bookNum);
      localStorage.setItem('currentChapter', chapter);
      localStorage.setItem('currentScrollY', scroll);
//     this.menuBook = currentBook;
      break;
    
    case 'second':
      this.bibleService.testament = Number(secondTestament);
      this.bibleService.bookSelected = Number(secondBookNum);
      localStorage.setItem('currentChapter', secondChapter);
      localStorage.setItem('currentScrollY', secondScroll);
//      localStorage.setItem('currentBookHTML', secondBook); 

      localStorage.setItem('secondTestamentIndex', testament);
      localStorage.setItem('secondBookIndex', bookNum);
      localStorage.setItem('secondSavedChapter', chapter);
      localStorage.setItem('secondScrollYSaved', scroll);
//      localStorage.setItem('secondBookHTML', currentBook);
//      this.menuBook =secondBook;
      break;
      
    case 'third':
//      const thirdBook = localStorage.getItem('thirdBookHTML');
      this.bibleService.testament = Number(localStorage.getItem('thirdTestamentIndex'));
      this.bibleService.bookSelected = Number(localStorage.getItem('thirdBookIndex'));
      localStorage.setItem('currentChapter', localStorage.getItem('thirdSavedChapter'));
      localStorage.setItem('currentScrollY', localStorage.getItem('thirdScrollYSaved'));
//      localStorage.setItem('currentBookHTML', thirdBook );

      localStorage.setItem('secondTestamentIndex', testament);
      localStorage.setItem('secondBookIndex', bookNum);
      localStorage.setItem('secondSavedChapter', chapter);
      localStorage.setItem('secondScrollYSaved', scroll);
//      localStorage.setItem('secondBookHTML', currentBook);

      localStorage.setItem('thirdTestamentIndex', secondTestament);
      localStorage.setItem('thirdBookIndex', secondBookNum);
      localStorage.setItem('thirdSavedChapter', secondChapter);
      localStorage.setItem('thirdScrollYSaved', secondScroll);
//      localStorage.setItem('thirdBookHTML', secondBook);
//      this.menuBook = thirdBook;
      break;
  };
  this.bibleService.title = this.bibleService.bible[this.bibleService.testament].books[this.bibleService.bookSelected].bookName;
  localStorage.setItem('currentTestamentIndex', (this.bibleService.testament).toString());
  localStorage.setItem('currentBookIndex', (this.bibleService.bookSelected).toString());

  this.bibleService.showChapters = false;
  this.bibleService.displayMenu = false;
  
  //hack to force angular to reload with the above parameters - route to '/' then back
  this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    this.router.navigate(['book', this.bibleService.title]);
  }); 

  }

  newBook() {
  // reset scroll position if new book selected                
    if ((this.bibleService.title != (this.bibleService.bible[Number(localStorage.getItem('currentTestamentIndex'))]
                                      .books[Number(localStorage.getItem('currentBookIndex'))].bookName ) ) 
                                    || (localStorage.getItem('currentChapter') == null) ) {
        localStorage.setItem('currentScrollY', '0');
        localStorage.setItem('currentChapter', '1');
    } 
  }

  savePosition() {
    localStorage.setItem('ScrollYSaved', localStorage.getItem('currentScrollY'));
    localStorage.setItem('currentSavedChapter', localStorage.getItem('currentChapter'));
  }

  storeBooks() {
    // only execute if not selected from history
    if (this.bibleService.menuHistoryBook == false) {

//      this.currentBook = localStorage.getItem('currentBookHTML');
//      this.secondBook = localStorage.getItem('secondBookHTML');

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
//          localStorage.setItem('thirdBookHTML', this.secondBook);
        }
        localStorage.setItem('secondTestamentIndex', this.currentTestamentArray);
        localStorage.setItem('secondBookIndex', this.currentBookArray);
        localStorage.setItem('secondScrollYSaved', this.currentScrollYPostion);
        localStorage.setItem('secondSavedChapter', this.currentSavedChapter);
//        localStorage.setItem('secondBookHTML', this.currentBook);
      }
      // The following need to be here or history won't originally populate
      localStorage.setItem('currentTestamentIndex', (this.bibleService.testament).toString());
      localStorage.setItem('currentBookIndex', (this.bibleService.bookSelected).toString());
//      localStorage.setItem('currentBookHTML', document.getElementById('currentBook').outerHTML);
    }
  }
}
