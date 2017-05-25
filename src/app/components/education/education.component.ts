import { Component, OnInit} from '@angular/core';
import { School } from './education.metadata';
import { SCHOOLS } from './education.config';
import {animateSchool } from './education.animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations:[ animateSchool ]
})
export class EducationComponent implements OnInit {
  public schools: School[];
  schoolState:string = 'inactive';

  constructor() { }

  ngOnInit() {
    this.schools = SCHOOLS;
    this.schoolState = 'active';
  }

  hasMajor(major){
    return major === "";
  }

}
