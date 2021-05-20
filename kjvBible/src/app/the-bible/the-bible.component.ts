import { Component, OnInit } from '@angular/core';
import { BibleService } from '../bible.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-the-bible',
  templateUrl: './the-bible.component.html',
  styleUrls: ['./the-bible.component.scss']
})

export class TheBibleComponent implements OnInit {

  public showChapters = true;

  constructor(public bibleService: BibleService,
              private meta: Meta,
              private title: Title) {

    title.setTitle('Bible');
    this.meta.addTag({ name: 'description', content: 'Bible - King James Version'});

  } 

  ngOnInit() { }

}
