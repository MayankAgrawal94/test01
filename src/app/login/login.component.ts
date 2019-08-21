import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router,) { 

    if(localStorage.getItem('isLoggedin')){
    	this.router.navigate(['/home/about']);
    }
  }

  ngOnInit() {
  }

  onLogin(){
    localStorage.setItem('isLoggedin', 'true');
    this.router.navigate(['/home/about']);
  }

}
