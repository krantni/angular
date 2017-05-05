import { Component, OnInit} from '@angular/core';
import { School } from './education.metadata';
import { SCHOOLS } from './education.config';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  public schools: School[];

  constructor() { }

  ngOnInit() {
    this.schools = SCHOOLS;
  }

  hasMajor(major){
    return major === "";
  }

}
