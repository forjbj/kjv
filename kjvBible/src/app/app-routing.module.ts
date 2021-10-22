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
  { path: 'book/:id',    //this works, however gives an error code 404 from static server (github pages) on reload
    component: DisplayBookComponent,
  },
  { path: 'book',              
    component: DisplayBookComponent, 
  },
  { path: '**', //this must be last or everything redirects here
    component: DisplayBookComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollOffset: [0, 52],
    relativeLinkResolution: 'legacy',
    onSameUrlNavigation: 'reload' // necessary for history books to load properly //nope this is not true
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }