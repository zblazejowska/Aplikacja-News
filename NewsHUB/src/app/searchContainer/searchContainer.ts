import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NewsProvider} from "../logic/news";
import {Article} from "../logic/article";

@Component({
  selector: 'searchContainer',
  templateUrl: './searchContainer.html',
  styleUrls: ['./searchContainer.css']
})
export class SearchContainerComponent {
  constructor(private route: ActivatedRoute) {
    this.newsx = new NewsProvider()
  }

  articles: Article[];
  newsx: NewsProvider;

  searchTag:string;


  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.searchTag = params['tag'];
      this.articles = this.newsx.searchArticle(this.searchTag);
    })

  }

}
