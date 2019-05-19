import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Team} from "./team.model";
import {from} from "rxjs/internal/observable/from";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private firestore: AngularFirestore) { }

  getTeams() {
    return this.firestore.collection('teams').snapshotChanges();
  }

  getTeam(teamId: string) {
    return this.firestore.doc('teams/' + teamId).get();
  }

  createTeam(team: Team): Observable<any> {
    return from(this.firestore.collection('teams').add(Object.assign({}, team) as Object));
  }

  updateTeam(team: Team) {
    const teamId = team.id;
    delete team.id;
    return from(this.firestore.doc('teams/' + teamId).update(Object.assign({}, team) as Object));
  }

  deleteTeam(teamId: string){
    this.firestore.doc('teams/' + teamId).delete();
  }
}
