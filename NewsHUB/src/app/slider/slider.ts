import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Article} from "../logic/article";
import {NewsProvider} from "../logic/news";

@Component({
  selector: 'slider',
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class SliderComponent implements OnInit{

  slideIndex:number;

  constructor(){
    this.slideIndex = 1;
    this.newsx = new NewsProvider()
  }

  newsx: NewsProvider;
  articles:Article[];


  showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {
      this.slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  ngOnInit(): void {
    this.articles = this.newsx.getArticles(6);
  }
}

window.addEventListener('load', function () {
  let slider = new SliderComponent()
  window.setInterval(()=>slider.showSlides(),6000);
});
