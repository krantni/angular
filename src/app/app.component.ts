import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd} from "@angular/router";
import { GoogleAnalyticsEventsService } from './services/google-analytics.service';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  implements OnInit {
  
  constructor(public router: Router, public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  /* workaround to have About be active link on start of page */
  ngOnInit() { 
    this.router.navigateByUrl('\about', { skipLocationChange: true });
  }
  

}
