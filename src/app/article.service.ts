import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable,of} from "rxjs";
import { environment } from "src/environments/environment";
import { Article } from "./article";
//import { ARTICLES } from "./mock-article";
@Injectable({
    providedIn:'root'
})
export class ArticleService{

constructor(private http:HttpClient){

}
getArticles():Observable<Article[]>{

    // const articles:Article[]=ARTICLES;
    // return of(articles);

    return this.http.get<Article[]>(environment.apiUrl+"/articles");


}
getArticle(key:string):Observable<Article>{
    // const article:Article[]=ARTICLES.filter(a => a.key === key);
    // return of(article[0])

    return this.http.get<Article>(environment.apiUrl+"/articles/"+ key);

}


}