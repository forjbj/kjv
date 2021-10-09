import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestamentsComponent } from './testaments/testaments.component';
import { DisplayBookComponent } from './display-book/display-book.component';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 52],
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }