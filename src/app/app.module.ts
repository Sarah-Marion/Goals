import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms'
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { AlertsService } from './alert-service/alerts.service';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule, NgProgress } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RoutingModule } from './routing/routing.module';
import { GoalService } from './goals/goal.service';
import { QuoteRequestService } from './quote-http/quote-request.service';

// Defining routes
const routes:Routes=[
  {path:"goals",component:GoalComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/goals", pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),// normal progress bar
    NgProgressHttpModule, // progress bar to load http requests
    RouterModule.forRoot(routes)
  ],
  providers: [AlertsService, GoalService, QuoteRequestService], //Add service to provider
  bootstrap: [AppComponent]
})
export class AppModule { }
