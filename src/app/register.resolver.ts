import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Team} from "./team.model";
import {Observable} from "rxjs/internal/Observable";
import {TeamService} from "./team.service";
import {map, mergeMap} from "rxjs/operators";
import {DocumentSnapshot, QueryDocumentSnapshot} from "@angular/fire/firestore";
import {RefDataService} from "./ref-data.service";

@Injectable({
  providedIn: 'root'
})
export class RegisterResolver implements Resolve<String[]> {

  constructor(
    private teamService: TeamService,
    private refDataService: RefDataService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<String[]> | Promise<String[]> | String[] {

    return this.refDataService.getColors().pipe(
      mergeMap((refData) => {
        return this.teamService.getTeams().pipe(
          map((teams) => {
            const existingTeams = teams.docs.map((team: QueryDocumentSnapshot<Team>) => team.data());
            const refDataObject = refData.data();
            const colorsArray = refDataObject.colors;

            const remainingColors = colorsArray.filter((color) => {
              return !existingTeams.some(team => team.color === color)
            });

            return remainingColors;
          })
        )
      })
    );
  }
}
