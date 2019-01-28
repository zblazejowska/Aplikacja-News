import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NewsProvider} from "../logic/news";
import {Article} from "../logic/article";

@Component({
  selector: 'article',
  templateUrl: './article.html',
  styleUrls: ['./article.css']
})
export class ArticleComponent implements OnInit, OnChanges{
  newsx: NewsProvider;
  @Input('articleFromArray')article: Article;
  @Input('articleId')ident:number;
  @Input('cat')catNumber:number;
  @Input('tagx')tag:string;

  ngOnChanges(chang: SimpleChanges){
      this.article = chang.article.currentValue;
  }

  constructor(){
    this.newsx = new NewsProvider()
  }


  ngOnInit(){
    if(this.catNumber===undefined)
      this.catNumber=6;
  }

  goToFullArticle(){
    window.open(this.article.urlOutside,'_blank');

  }


}
