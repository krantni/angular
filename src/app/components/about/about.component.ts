import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  skills:string = "Throughout my education and work experience I have been exposed to many languages: JavaScript, HTML, CSS, NodeJS, Java and C++ to name a few. You can look through my education and experience pages to learn more about my skillset.";
  about:string = "I am a developer and I like to build responsive websites, using various web technologies. This one is built with Angular. The code for this website can be found on my GitHub, or to get in touch go through any of the social sites below!";

  ngOnInit() {
  }

}