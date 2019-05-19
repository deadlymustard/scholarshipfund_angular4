import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Team} from "./team.model";
import {Observable} from "rxjs/internal/Observable";
import {TeamService} from "./team.service";
import {map} from "rxjs/operators";
import {DocumentSnapshot} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class TeamResolver implements Resolve<Team> {

  constructor(private teamSerivce: TeamService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team> | Promise<Team> | Team {
    const id = route.paramMap.get('id');
    return this.teamSerivce.getTeam(id).pipe(
      map((teamDoc: DocumentSnapshot<Team>) => { const resolvedTeam = teamDoc.data(); resolvedTeam.id = id; return resolvedTeam})
    );
  }
}
