import { Component, OnInit } from '@angular/core';
import { Job } from './experience.metadata';
import { JOBS } from './experience.config';
import { animateJob } from './experience.animations';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [ animateJob ]
})

export class ExperienceComponent implements OnInit {
  public jobs: Job[];
  jobState:string = 'inactive';

  constructor() { }

  ngOnInit() {
    this.jobs = JOBS;
    this.jobState = 'active';
  }

  public hasDetail(detail){
    return detail === "";
  }

}
