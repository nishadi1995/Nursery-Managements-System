import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

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

export const router: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'forum',component:ForumComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'home',component:HomeComponent},
    {path:'fees',component:FeesComponent},
    {path:'attendance',component:AttendanceComponent},
    {path:'salary',component:SalaryComponent},
    {path:'leave',component:LeaveComponent},
    {path:'year_plan',component:YearPlanComponent},
    {path:'settings',component:SettingsComponent},
    {path:'admin_forum',component:AdminForumComponent},
    {path:'register',component:RegisterComponent},


    /*children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'fees',
        component: FeesComponent
      },
    ]*/
  

];

export const routes:ModuleWithProviders=RouterModule.forRoot(router);


  export class AppRoutingModule { }
