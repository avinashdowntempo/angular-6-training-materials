export class Question {
    question: string;
    type: string;
    option: string;
    constructor(question: string, type: string, option: string) {
        this.question = question;
        this.type = type;
        this.option = option;
    }
}
