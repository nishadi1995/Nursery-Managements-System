import { Component, OnInit } from '@angular/core';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import { and } from '@angular/router/src/utils/collection';

interface studentFees{
  total:Number;
  inst1st:Number;
  inst2nd:Number;
  inst3rd:Number;
  topay:Number;
}


@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css']
})
export class FeesComponent implements OnInit {
  
  studentID: BehaviorSubject<String>;
  checkID:String;
  studentF:Observable<studentFees[]>;

  one:number;
  two:number;
  three:number;

  changedID:Observable<any[]>;

  constructor(public db: AngularFirestore) {
   }

  ngOnInit() {
  }
  
   search(){
    this.studentID=new BehaviorSubject('');
    this.studentF=this.studentID.pipe(
      switchMap(id=>
        this.db.collection<studentFees>('/Fees',ref=> ref.where
        ('s_ID','==',this.checkID) )
         .valueChanges(),
      ),
    );
    if(this.studentF==null){
      alert("Student not found");
    }
    this.changedID=this.db.collection('Fees').snapshotChanges();
  }

  update(){
    //console.log(this.changedID[0])
  /* this.db.collection('Fees').doc("qRTI8tSAP25AiDTpdepM").set(
      {
     'inst1st': this.studentFees.inst1st,
     'inst2nd': 6000,
     'inst3rd': this.three, 
      });*/
     
  }
   
}
