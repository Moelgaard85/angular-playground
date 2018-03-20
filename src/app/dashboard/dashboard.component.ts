import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Person } from '../core/models/Person';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // *** Interfaces and Classes - See Person.ts ***

    // **New Person with custom existing data
    // const person1Database = {
    //   custom: 2,
    //   id: 'sdfsdfsd',
    //   title: 'dsfdsf',
    //   createdAt: new Date(),
    //   firstname: 'Test',
    //   age: 22
    // };
    // const person1 = new Person(person1Database);
    // person1.logMe();
    // const person1Converted = person1.create();
    // console.log('person1Converted: ', person1Converted);

    // **New Person with no initial data
    // const person2 = new Person();
    // person2.logMe();
    // person2.firstname = 'Jens';
    // const person2Converted = person2.create();
    // console.log('person2Converted: ', person2Converted);

    // **New Person with wrong data
    // const person3 = new Person({ firstname: 1 });

    // *** Interfaces and Classes - See Person.ts ***


  }

}
