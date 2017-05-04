import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isCollapsed = true;

  ngOnInit() {
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }
  
  public clicked(){
    console.log("clicked");
  }

}
