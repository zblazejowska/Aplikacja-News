import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {NewsProvider} from "../logic/news";
import {Article} from "../logic/article";

@Component({
  selector: 'sliderArticle',
  templateUrl: './sliderArticle.html',
  styleUrls: ['./sliderArticle.css']
})

export class SliderArticleComponent {

  newsx: NewsProvider;
  @Input('article') sliderArticle: Article;

  ngOnChanges(chang: SimpleChanges) {
    this.sliderArticle = chang.sliderArticle.currentValue;
  }

  constructor() {
    this.newsx = new NewsProvider();
  }
}

