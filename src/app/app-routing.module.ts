import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';

import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path:'articles',component:ArticleListComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'',component:ArticleListComponent
  },
  {
    path:':key',component:ArticleComponent
  },
  {
    path:'404',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
