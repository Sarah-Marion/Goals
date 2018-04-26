import { Injectable } from '@angular/core';
import { Goals } from '../goalsData';

@Injectable()
export class GoalService {
  getGoals(){
    return Goals;
  }
  getGoal(id){
    for (let goal of Goals){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }

}
