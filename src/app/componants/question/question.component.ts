import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestServiceService } from 'src/app/Services/quest-service.service';
import { Question } from '../../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  questionList: any = [];
  public currentQuestion: number = 0;
  public counter = 60
  interval$: any
  public score = 0
  public progress: string = "0"
  public correctAnswer = 0
  public inCorrectAnswer = 0
  isTestOver :boolean = false
  constructor(private qServ: QuestServiceService) { }

  ngOnInit(): void {

    this.qServ.getQuestions()
      .subscribe(res => {
        this.questionList = res.questions


        // this.qServ.getData();

      })



    this.startCounter()

  }

  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
      });
    setTimeout(() => {

      this.interval$.unsubscribe();
      this.currentQuestion++;
      this.counter = 60;

    }, 60000)

  }


  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 60;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  previousQuest() {
    this.currentQuestion--;
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  resetQuest() {
    this.currentQuestion = 0
    this.resetCounter();


  }


  answer(currentQuestion: number, option: any) {
    if(currentQuestion===this.questionList.length){
    this.isTestOver = true
    }
    if (option.correct) {
      this.correctAnswer++
      this.score += 10
      setTimeout(() => {
        this.currentQuestion++

      }, 1000)
      this.getProgressPercent()
    } else {
      this.inCorrectAnswer++
      setTimeout(() => {
        this.currentQuestion++
      }, 1000)
      this.getProgressPercent()
      this.score -= 10

    }
  }
  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100).toString()
    return this.progress
  }
}
