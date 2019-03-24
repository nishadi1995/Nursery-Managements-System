import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-year-plan',
  templateUrl: './year-plan.component.html',
  styleUrls: ['./year-plan.component.css']
})
export class YearPlanComponent implements OnInit {

  yearPlan: Observable<any[]>;

  program: string;
  date: string;


  constructor(private db: AngularFirestore) {
    this.yearPlan = db.collection('/YearPlan').valueChanges();
   }



   onSubmit() {
     if (this.program == null || this.date == null) {
      alert('Please fill required fields..');
     } else {
        this.db.collection('YearPlan').add({
          'month': this.date,
          'program': this.program,
        });
        alert('Successfully submitted');
     }
     document.forms['programForm'].reset();
   }


  ngOnInit() {
  }

}
