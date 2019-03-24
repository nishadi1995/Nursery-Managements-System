import { Component, OnInit } from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

interface leave{
  total_leaves:Number;
  taken:Number;
}

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  staffID: BehaviorSubject<String>;
  checkID:String;
  leaveSt:Observable<leave[]>;

  constructor(public db: AngularFirestore) { }

  ngOnInit() {
  }

  search(){
    this.staffID=new BehaviorSubject('');
    this.leaveSt=this.staffID.pipe(
      switchMap(id=>
        this.db.collection<leave>('/Leave',ref=> ref.where
        ('staff_ID','==',this.checkID) )
         .valueChanges(),
      ),
    );
  }

}
