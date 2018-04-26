import { Component, OnInit } from '@angular/core';
import { Goal} from '../goal'
import { Goals} from '../goalsData';
import { GoalService } from '../goals/goal.service'
import { AlertsService } from '../alert-service/alerts.service';
import { HttpClient } from '@angular/common/http'
import { Quote } from '../quote-class/quote';
import {QuoteRequestService} from '../quote-http/quote-request.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  providers: [GoalService],
})
export class GoalComponent implements OnInit {

  goals:Goal[]
  alertService: AlertsService;

  quote:Quote;
  
  // goals = [
  //   new Goal(1, "Learn how to manipulate code in Angular", "Complete today's content",new Date(2018,3,16) ),
  //   new Goal(2, "Watch The Black Panther", "Find an Online version and also watch re-runs of Archer",new Date(2018,3,17) ),
  //   new Goal(3, "Buy Cookies","I have to buy cookies for myself",new Date(2018,3,18) ),
  //   new Goal(4, "Get new Phone case","I have my birthday coming up soon",new Date(2018,3,20) ),
  //   new Goal(5, "Solve Algebraic Equations", "Damn I'm awesome",new Date(2018,3,19) ),
  //   new Goal(6, "Plot my world domination plan","Cause I am an evil overlord",new Date(2018,3,19) ),
  // ]

  addNewGoal(goal){
    let goalLength=this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate= new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  completeGoal(isComplete,index){
    if (isComplete){
      this.goals.splice(index,1)
    }
  }

  // deleteGoal(isComplete,index){
  //     if(isComplete){
  //       let toDelete=confirm( `Are you sure you want to delete ${this.goals[index].name} `)

  //       if (toDelete){
  //         this.goals.splice(index,1)
  //         this.alertService.alertMe("Goal has been Deleted")
  //       }
  //     }
  //   }
  goToUrl(id){
    this.router.navigate(['/goals',id])
  }
  deleteGoal(index){
    let toDelete=confirm(`Are you sure you want to delete ${this.goals[index].name}`)
    if(toDelete){
      this.goals.splice(index,1)
      this.alertService.alertMe("Goal has been deleted")
    }
  }
  
  

  constructor(goalService:GoalService,alertService:AlertsService,/*private http:HttpClient*/private quoteService:QuoteRequestService,private router:Router) {
    this.goals=goalService.getGoals();
    this.alertService = alertService;

   }

  ngOnInit() {

    // interface ApiResponse{
    //   quote:string;
    //   author:string;
    // }
    //     // Successful API request.
    // this.http.get<ApiResponse>("https:talaikis.com/api/quotes/random/").subscribe(data=>{
    //   this.quote= new Quote(data.quote,data.author)// Successful API request.
     
    // }, err=>{
    //   this.quote=new Quote("Never, never, never give up.","Winston Churchill")
    //   console.log("Error Occured")
    // })

    this.quoteService.quoteRequest();
    this.quote=this.quoteService.quote;
  }

}
