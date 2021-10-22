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
  { path: 'book/:id',               //this works, however gives an error code 404 from static server (github pages)
    component: DisplayBookComponent, // Fix applied to app-component.ts
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
//    onSameUrlNavigation: 'reload' // necessary for history books to load properly //nope
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }