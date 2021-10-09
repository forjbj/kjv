import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { BibleService } from '../bible.service';

@Component({
  selector: 'app-chapter-numbers',
  templateUrl: './chapter-numbers.component.html',
  styleUrls: ['./chapter-numbers.component.scss']
})
export class ChapterNumbersComponent implements OnInit, AfterViewInit {

  constructor(public bibleService: BibleService,
             @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void { }
  
  ngAfterViewInit(){
    // highlight chapters on scroll
    const chapters = this.document.querySelectorAll("section");
    const chaptersGrid = this.document.querySelectorAll(".chapters");
    const options = {
      root: null, // viewport
      threshold: [0],
      rootMargin: "-20%"
    };
    const observer = new IntersectionObserver(function (entries) {
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
    //block: "nearest" is essential to stop page moving!
    chaptersGrid[(Number(localStorage.getItem('chapterCurrent'))-1)].scrollIntoView({block: "nearest"}); 
    },options);
      chapters.forEach(chapter=> {
      observer.observe(chapter);
    }) 
  }
}
