import * as $ from 'jquery';
import {Article} from "./article";

export class NewsProvider{

  readonly MAIN_URL = "https://newsapi.org/v2/top-headlines"
  readonly CATEGORIES = ["business", "entertainment", "health", "science", "sports", "technology", "general"]
  readonly APIKEY = "&apiKey=575d0735025241fda1b32a047f19dcd3"

  articles: Article[] = [];

  wantedArticles: Article[] = [];

  getArticles(cat):Article[]{
    this.articles = [];
    $.ajaxSetup({'async': false});
    $.getJSON(this.MAIN_URL+"?category="+this.CATEGORIES[cat]+"&country=gb"+this.APIKEY, (data) => {
      let ix = 0;
      for(let i=0;i<data.articles.length;i++){
        if(data.articles[i].title!==null && data.articles[i].urlToImage !== null && data.articles[i].description !== null ) {
          console.log(data)
          this.articles[ix] = new Article(data.articles[i].title,data.articles[i].description,data.articles[i].urlToImage,data.articles[i].url )
          ix++;

        }
      }
    });
    $.getJSON(this.MAIN_URL+"?category="+this.CATEGORIES[cat]+"&country=us"+this.APIKEY, (data) => {
      let ix = this.articles.length;
      for(let i=0;i<data.articles.length;i++){
        if(data.articles[i].title!==null && data.articles[i].urlToImage !== null && data.articles[i].description !== null ) {
          this.articles[ix] = new Article(data.articles[i].title,data.articles[i].description,data.articles[i].urlToImage,data.articles[i].url )
          ix++;
        }
      }
    });
    // console.log("+2")
    // for(let i=0;i<17;i++){
    //   this.articles[i] = new Article(this.CATEGORIES[cat]+"  "+ i+ "    !!","bleb belb bleb elbelb bleblebel belbeblbel blebelblebl ebe blebleble bb lebleb lebleblbel. Bblelblelblbelbbellbleb eblebleb lbelebl l elblebblelb blele. lblbelbelellbleble!","http://www.koty.pl/wp-content/uploads/2017/11/shutterstock_589722092-e1510059950350.jpg", "https://www.google.pl/search?q=kotek&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj3hMCYxY3bAhVIb1AKHcZrBVUQ_AUICigB&biw=1920&bih=987#imgrc=CtsdztmOS92ERM:" )
    // }
    //
    // console.log(this.articles.length)
    return this.articles;
  }



  searchArticle(tag):Article[]{
      this.wantedArticles = []
    $.ajaxSetup({'async': false});
    $.getJSON("https://newsapi.org/v2/top-headlines?q="+tag+"&pageSize=100"+this.APIKEY, (data) => {
      console.log(data.status+data.totalResults)
      let ix = 0;
      for(let i=0;i<data.articles.length;i++){
        if(data.articles[i].title!==null && data.articles[i].urlToImage !== null && data.articles[i].description !== null ) {
          this.wantedArticles[ix] = new Article(data.articles[i].title,data.articles[i].description,data.articles[i].urlToImage,data.articles[i].url )
          ix++;

        }
      }
    });

    // console.log("+1")
    // for(let i=0;i<5;i++){
    //   this.wantedArticles[i] = new Article(tag+"  "+ i+ "    !!","bleb belb bleb elbelb bleblebel belbeblbel blebelblebl ebe blebleble bb lebleb lebleblbel. Bblelblelblbelbbellbleb eblebleb lbelebl l elblebblelb blele. lblbelbelellbleble!","http://www.koty.pl/wp-content/uploads/2017/11/shutterstock_589722092-e1510059950350.jpg","https://www.google.pl/search?q=kotek&source=lnms&tbm=isch&sa=X&ved=0ahUKEwj3hMCYxY3bAhVIb1AKHcZrBVUQ_AUICigB&biw=1920&bih=987#imgrc=CtsdztmOS92ERM:" )
    // }
    // console.log(this.wantedArticles.length)
      return this.wantedArticles;
  }


}

