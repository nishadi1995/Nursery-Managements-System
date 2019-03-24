import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForumComponent } from './forum/forum.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeesComponent } from './fees/fees.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { SalaryComponent } from './salary/salary.component';
import { LeaveComponent } from './leave/leave.component';
import { YearPlanComponent } from './year-plan/year-plan.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminForumComponent } from './admin-forum/admin-forum.component';
import { RegisterComponent } from './register/register.component';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import{AngularFirestoreModule} from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import {MatButtonModule, MatToolbarModule,MatTabsModule,MatCardModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ForumComponent,
    DashboardComponent,
    FeesComponent,
    AttendanceComponent,
    SalaryComponent,
    LeaveComponent,
    YearPlanComponent,
    SettingsComponent,
    AdminForumComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    
    RouterModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,

    routes
  ],

  //exports: [MatButtonModule, MatToolbarModule,MatTabsModule,MatCardModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
