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
  displayMessage(question) {
    console.table(this.questions);
    // tslint:disable-next-line:no-console
    console.time('test timer');
    setTimeout(() => {
      // tslint:disable-next-line:no-console
      console.log(question);
      console.warn(question);
      console.error(question);
      // tslint:disable-next-line:no-console
      console.info(question);
      console.log('%c ' + question, 'background: #222; color: #bada55');
      // tslint:disable-next-line:no-console
      console.timeEnd('test timer');
      this.traceFunction();
    }, 2000);
    // debugger;
    // alert('the selected question is \n' + question);
  }
  traceFunction() {
    console.log('im being traced');
    // tslint:disable-next-line:no-console
    // console.trace('trace me');
  }
}
