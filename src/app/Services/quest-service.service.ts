import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class QuestServiceService {

list :any =[]
  constructor(private http:HttpClient) {
  }
  getQuestions() {

    return  this.http.get<any>("../../assets/question.json")

    console.log(this.list)
  }

  }
