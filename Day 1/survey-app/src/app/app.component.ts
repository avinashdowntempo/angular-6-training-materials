import { Component } from '@angular/core';

@Component({
  selector: 'ang-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Training';
  questions = [{ question: 'Was the Training UseFul?', type: 'mandatory' },
  { question: 'How Efficient is the training?', type: 'optional' },
  { question: 'Was the trainer able to cover most concepts?', type: 'mandatory' }];
}
