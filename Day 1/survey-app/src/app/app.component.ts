import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'ang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Training';
  questions = [
    new Question('Was the Training UseFul Really?', 'mandatory'),
    new Question('Does the training make you feel sleepy?', 'optional'),
    { question: 'Was the Training UseFul?', type: 'mandatory' },
    { question: 'How Efficient is the training?', type: 'optional' },
    { question: 'Was the trainer able to cover most concepts?', type: 'mandatory' }];
  // questions: Question[];

  constructor() {

  }
  printSomething() {
    alert('You have clicked something');
  }

}
