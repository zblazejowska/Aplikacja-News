import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {FirebaseDatabase} from '@firebase/database-types';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'categoriesChoice',
  templateUrl: './categoriesChoice.html',
  styleUrls: ['./categoriesChoice.css']
})
export class CategoriesChoiceComponent {

  db:FirebaseDatabase;
  userID:string;

  constructor(db: AngularFireDatabase, auth: AngularFireAuth) {
    this.db=db.database;
    this.userID= "default"
    auth.authState.subscribe((user) => {
      if(user) this.userID = user.uid;
      this.getCatChoice()
    });
  }

  getCatChoice(){
    let business = <HTMLInputElement> document.getElementById("businessInput");
    let entertainment = <HTMLInputElement> document.getElementById("entertainmentInput");
    let health = <HTMLInputElement> document.getElementById("healthInput");
    let science = <HTMLInputElement> document.getElementById("scienceInput");
    let sport = <HTMLInputElement> document.getElementById("sportInput");
    let technology = <HTMLInputElement> document.getElementById("technologyInput");
    this.db.ref('categories/'+this.userID).on('value', (snapshot) => {
      business.checked = snapshot.val().business;
      entertainment.checked =  snapshot.val().entertainment ;
      health.checked =   snapshot.val().health;
      science.checked =  snapshot.val().science ;
      sport.checked = snapshot.val().sport;
      technology.checked = snapshot.val().technology;
    });
  }

  addCatChoice(): void {
    let business = <HTMLInputElement> document.getElementById("businessInput");
    let entertainment = <HTMLInputElement> document.getElementById("entertainmentInput");
    let health = <HTMLInputElement> document.getElementById("healthInput");
    let science = <HTMLInputElement> document.getElementById("scienceInput");
    let sport = <HTMLInputElement> document.getElementById("sportInput");
    let technology = <HTMLInputElement> document.getElementById("technologyInput");
    this.db.ref('categories/'+this.userID).set({
      business: business.checked,
      entertainment:entertainment.checked,
      health: health.checked,
      science:science.checked,
      sport: sport.checked,
      technology:technology.checked
    })
  }
}

