import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestamentsComponent } from './testaments/testaments.component';
import { DisplayBookComponent } from './display-book/display-book.component';
import { MenuComponent } from './menu/menu.component';
import { ChapterNumbersComponent } from './chapter-numbers/chapter-numbers.component';

const routes: Routes = [
  { path: '',
  redirectTo: 'book',
  pathMatch: 'full',
  },
  { path: 'testaments',
    component: TestamentsComponent,
  },
  { path: 'book',
    component: DisplayBookComponent,
  },
  { path: 'book/:id',
    component: DisplayBookComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 52],
    relativeLinkResolution: 'legacy',
    onSameUrlNavigation: 'reload' // necessary for history books to load properly
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }