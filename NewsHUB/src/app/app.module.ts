import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './auth.service';
import {HttpClientModule} from '@angular/common/http';

import {MenuComponent} from './menu/menu';
import {SearchComponent} from './searchBar/searchBar';
import {ProfileMenuComponent} from './profileMenu/profileMenu';
import {SliderComponent} from './slider/slider';
import {DatePipeComponent, WeatherComponent} from './weather/weather';
import {SliderArticleComponent} from "./sliderArticle/sliderArticle";
import {AppComponent} from './app.component';
import {ProfileContainerComponent} from "./profileContainer/profileContainer.component";
import {UserDataComponent} from "./userData/userData";
import {CategoriesChoiceComponent} from "./categoriesChoice/categoriesChoice";
import {HomepageComponent} from "./homepage/homepage.component";
import {ArticleComponent} from "./article/article";
import {AboutProjectComponent} from "./aboutProject/aboutProject.component";
import {CatMenuComponent} from "./categoriesMenu/categoriesMenu";
import {BtnAboutProjectComponent} from "./btnAboutProject/btnAboutProject";
import {SearchContainerComponent} from "./searchContainer/searchContainer";
import {LoginContainerComponent} from "./loginContainer/loginContainer.component";
import {WeatherService} from "./weatherService/weather.service";
import { environment } from '../environments/environment';

// const firebaseConfig = {
//   apiKey: "AIzaSyAMc1KI-zlkosp7qLKeMB4_F5Nvv82C-FM",
//   authDomain: "newshub-3011.firebaseapp.com",
//   databaseURL: "https://newshub-3011.firebaseio.com",
//   projectId: "newshub-3011",
//   storageBucket: "newshub-3011.appspot.com",
//   messagingSenderId: "159798983174"
// };

@NgModule({
  declarations: [
    MenuComponent,
    SearchContainerComponent,
    CatMenuComponent,
    SearchComponent,
    ProfileMenuComponent,
    SliderComponent,
    ArticleComponent,
    WeatherComponent,
    DatePipeComponent,
    SliderArticleComponent,
    AppComponent,
    ProfileContainerComponent,
    UserDataComponent,
    CategoriesChoiceComponent,
    HomepageComponent,
    AboutProjectComponent,
    BtnAboutProjectComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    WeatherService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
