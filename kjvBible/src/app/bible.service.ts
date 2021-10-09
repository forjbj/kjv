import { Injectable } from '@angular/core';
import kjvBible from '../assets/bible/Bible.json';

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  // import Bible
  public bible = kjvBible;

  public versionTitle = 'King James Version';

  public testament:number = Number(localStorage.getItem('currentTestamentIndex')); // defaults to '0' (old testament) if '' or null - javascript is broken

  public bookSelected:number = Number(localStorage.getItem('currentBookIndex')); // defaults to '0' (Genesis) see above

  public title: string = this.bible[this.testament].books[this.bookSelected].bookName ?? "Bible";

  public showChapters = false; //for chapter selection MUST BE false and toggled in display-book.component.ts

  public displayMenu: boolean = false;

  public currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;


    constructor() {}
}
