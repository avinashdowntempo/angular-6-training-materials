import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../question.model';

@Component({
  selector: 'ang-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() questions: Array<Question>;
  @Output() questionEnd = new EventEmitter();
  highlighter = 0;
  loop;
  constructor() { }

  ngOnInit() {
    this.loop = setInterval(() => {
      if (this.highlighter < this.questions.length) {
        this.highlighter++;
      } else {
        this.questionEnd.emit('end of question loop');
        this.highlighter = 1;
      }

    }, 1000);
  }

  stopLoop() {
    clearInterval(this.loop);
  }
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
