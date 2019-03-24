import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, Params } from '@angular/router';
import { ForumComponent } from './forum.component';
import{AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';

describe('ForumComponent', () => {
  let component: ForumComponent;
  let fixture: ComponentFixture<ForumComponent>;
  let service:AngularFirestore;
  let route:Router;

  beforeEach(async(() => { 
    TestBed.configureTestingModule({
      declarations: [ new ForumComponent (service,route)],
      imports:[AngularFirestore]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    let component = ForumComponent;
    expect(component).toBeTruthy();
  });
  it('should have a message with `warn`', () => {
    expect(component.vari).toContain('warn');
  });
});
