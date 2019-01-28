import {Component} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {FirebaseDatabase} from '@firebase/database-types';
import {AngularFireAuth} from "angularfire2/auth";


@Component({
  selector: 'userData',
  templateUrl: './userData.html',
  styleUrls: ['./userData.css']
})
export class UserDataComponent {

  db:FirebaseDatabase;
  userID:string;

  constructor(db: AngularFireDatabase, auth: AngularFireAuth) {
    this.db=db.database;
    this.userID= "default"
    auth.authState.subscribe((user) => {
      if(user) this.userID = user.uid;
      this.getUserData()
    });
  }

  getUserData(){
    let userName = <HTMLInputElement> document.getElementById("inputName");
    let userSurname = <HTMLInputElement> document.getElementById("inputSurname");
    this.db.ref('users/'+this.userID).on('value', (snapshot) => {
      userName.value = snapshot.val() && snapshot.val().name || "";
      userSurname.value = snapshot.val() && snapshot.val().surname || "";
    });
  }

  addUserData(): void {
    let userName = <HTMLInputElement> document.getElementById("inputName");
    let userSurname = <HTMLInputElement> document.getElementById("inputSurname");
    this.db.ref('users/'+this.userID).set({
      name: userName.value,
      surname:userSurname.value
    })
  }
}
