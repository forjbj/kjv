import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestamentComponent } from './testament/testament.component';
import { DisplayChapterComponent } from './display-chapter/display-chapter.component';

const routes: Routes = [
  { path: '',
  redirectTo: 'book',
  pathMatch: 'full',
  },
  { path: 'testament',
    component: TestamentComponent,
  },
  { path: 'book',
    component: DisplayChapterComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 63],
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }