import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profileContainer',
  templateUrl: './profileContainer.component.html',
  styleUrls: ['./profileContainer.component.css']
})
export class ProfileContainerComponent implements OnInit {
  constructor(public authService: AuthService) { }

  ngOnInit() {
    document.getElementById('logOutBtn').addEventListener('click', () => {
      let logOut = document.getElementById('logOutBtn');
      if (logOut.innerHTML == 'LOG OUT' || logOut.innerHTML == 'logout') {
        this.authService.logout();
      }
    });
  }

  signout() {
    this.authService.logout();
  }

}
