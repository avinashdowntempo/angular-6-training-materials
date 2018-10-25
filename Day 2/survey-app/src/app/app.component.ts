import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'ang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Training';
  questions: Array<Question>;
  // questions: Question[];

  constructor() {
    this.questions = [
      new Question('Was the Training UseFul Really?', 'mandatory', 'checkbox'),
      new Question('Does the training make you feel sleepy?', 'optional', 'checkbox'),
      { question: 'Was the Training UseFul?', type: 'mandatory', option: 'radiobutton' },
      { question: 'How Efficient is the training?', type: 'optional', option: 'checkbox' },
      { question: 'Was the trainer able to cover most concepts?', type: 'mandatory', option: 'text' }];
  }

  completeQuestion(message) {
    alert(message);
  }

}
