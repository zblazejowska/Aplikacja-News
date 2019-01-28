import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CategoriesChoiceComponent} from "../categoriesChoice/categoriesChoice";
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {FirebaseDatabase} from '@firebase/database-types';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'catMenu',
  templateUrl: './categoriesMenu.html',
  styleUrls: ['./categoriesMenu.css']
})
export class CatMenuComponent {

  constructor(private router: Router,db: AngularFireDatabase, auth: AngularFireAuth) {
    this.db=db.database;
    auth.authState.subscribe((user) => {
      if(user) this.userID = user.uid;
      this.getCatChoice()
    });
  }

  db:FirebaseDatabase;
  userID:string;


  categories = [
    {"id": 0, "name": "Business", "visible": true},
    {"id": 1, "name": "Entertainment", "visible": true},
    {"id": 2, "name": "Health", "visible": true},
    {"id": 3, "name": "Science", "visible": true},
    {"id": 4, "name": "Sports", "visible": true},
    {"id": 5, "name": "Technology", "visible": true},
    {"id": 6, "name": "General", "visible": true}
  ]


  getCatChoice(){
    let business = <HTMLInputElement> document.getElementById("businessInput");
    let entertainment = <HTMLInputElement> document.getElementById("entertainmentInput");
    let health = <HTMLInputElement> document.getElementById("healthInput");
    let science = <HTMLInputElement> document.getElementById("scienceInput");
    let sport = <HTMLInputElement> document.getElementById("sportInput");
    let technology = <HTMLInputElement> document.getElementById("technologyInput");
    this.db.ref('categories/'+this.userID).on('value', (snapshot) => {
      this.categories[0].visible = snapshot.val().business;
      this.categories[1].visible =  snapshot.val().entertainment ;
      this.categories[2].visible =   snapshot.val().health;
      this.categories[3].visible =  snapshot.val().science ;
      this.categories[4].visible = snapshot.val().sport;
      this.categories[5].visible = snapshot.val().technology;
    });
  }

}



