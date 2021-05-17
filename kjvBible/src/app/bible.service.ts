import { Injectable } from '@angular/core';
import kjvBible from '../assets/bible/Bible.json';

@Injectable({
  providedIn: 'root'
})
export class BibleService {

  public title: string = "Bible";
  public versionTitle = 'King James Version';

  public testament = 0;

  public bookSelected = 0;

  // load last opened Bible book
  public loadFromStorage = true;

  // import Bible
  public bible = kjvBible;


   constructor() { }

}
