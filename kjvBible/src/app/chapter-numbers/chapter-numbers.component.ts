import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { BibleService } from '../bible.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-chapter-numbers',
  templateUrl: './chapter-numbers.component.html',
  styleUrls: ['./chapter-numbers.component.scss']
})
export class ChapterNumbersComponent implements OnInit, AfterViewInit {

  public chaptersGrid = this.document.querySelectorAll(".chapters");
  public chapter = localStorage.getItem('currentChapter');

  constructor(public bibleService: BibleService,
              public historyService: HistoryService,
             @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void { }
  
  ngAfterViewInit(){
    
    // highlight chapters on scroll
    const chapters = this.document.querySelectorAll("section");
    const chaptersGrid = this.document.querySelectorAll(".chapters");
    const options = {
      root: null, // viewport
      threshold: [0],
      rootMargin: "-20%" //highlight multiple chapters if visible
    };
    const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      let chapter = entry.target.querySelector("div").id;         
      if (entry.isIntersecting) {
        chaptersGrid[Number(chapter)-1].classList.add("chapterScroll");
      }
      else {
        chaptersGrid[Number(chapter)-1].classList.remove("chapterScroll");       
      }
    });
    //block: "nearest" is essential to stop page moving!
    chaptersGrid[(Number(localStorage.getItem('currentChapter'))-1)].scrollIntoView({block: "nearest"}); 
    },options);
      chapters.forEach(chapter=> {
      observer.observe(chapter);
    }) 
  } 
}
