import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ARTICLES } from '../mock-article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles:Article[] =[];
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    // this.articles=ARTICLES;
    // console.log(this.articles);
    this.getArticles()
  }
  getArticles():void{
    this.articleService
    .getArticles()
    .subscribe(articles => this.articles=articles);
  }

  

}
