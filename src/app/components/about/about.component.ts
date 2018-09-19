import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  skills:string = "Throughout my education and work experience I have been exposed to many languages: JavaScript, HTML, CSS, NodeJS, React + Redux, Backbone, Java and C++ to name a few. You can look through my education and experience pages to learn more about my skillset and experiences. ";
  about:string = "Hello! I built this website using Angular and Firebase NoSQL database. It is a work in progress (as most things are) but the code for this website can be found on my GitHub. Feel free to take a look at my past education, experience and even some recipes that I needed place to store. If you'd like to get in touch go feel free to shoot me an email at krantznicholas@gmail.com!";

  ngOnInit() {
  }

}