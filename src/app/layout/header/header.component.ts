import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	nav = 1
  constructor(private router: Router) { }

  ngOnInit() {
    let href = this.router.url;
    if(href == '/home/about'){
      this.nav = 1
    }else if(href == '/home/services'){
      this.nav = 2
    }
  }

  navClick(type){
  	this.nav = type
  }

  onLogout(){
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }

}
