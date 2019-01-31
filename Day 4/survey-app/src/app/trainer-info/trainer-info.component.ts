import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ang-trainer-info',
  templateUrl: './trainer-info.component.html',
  styleUrls: ['./trainer-info.component.css']
})
export class TrainerInfoComponent implements OnInit {
  info = {
    name: 'avinash',
    dob: new Date(1994, 2, 4),
    mobile: 9597352264,
    price: 100,
    training: 'ANGULAR FUNDAMENTALS',
    rating: 9,
    technologies: ['java', 'python', 'nodejs', 'angular', 'mongodb', 'oracle db'],
    address: { street: 'velachery', city: 'chennai', State: 'TamilNadu' },
    age: [1, 2, 3, 4, 5, 6, 7, 8],
    test: [{ name: 'avinash', pro: 'ctl' }, { name: 'jag', pro: 'lib' }, { name: 'lakshmi', pro: 'ctl' }, { name: 'bala', pro: 'win' }, { name: 'gandhi', pro: 'ctl' }, { name: 'deepak', pro: 'ctl' }]
  };
  constructor() { }

  ngOnInit() {
  }
  addVal(value) {
    this.info.age.push(value);
    alert(this.info.age);
  }
}
