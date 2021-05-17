import { Component } from '@angular/core';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-testament',
  templateUrl: './testament.component.html',
  styleUrls: ['./testament.component.scss']
})
export class TestamentComponent {

  constructor(public bibleService: BibleService ) {
        // change title so as to not make it a button
    this.bibleService.title = this.bibleService.versionTitle;
  }

}
