import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const serverPort = 'http://localhost:5000';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }


  submitTeam(color: string, league: string) {
    const apiQuery = `${serverPort}/team/color/${color}/${league}`;

    return <Observable<any>> this.http.get(apiQuery, httpOptions);
  }

  registerTeam(team: any) {
    const apiQuery = `${serverPort}/register`;

    return <Observable<any>> this.http.post(apiQuery, team);

  }

  getTeamConfirmation(hash: string) {
    const apiQuery = `${serverPort}/register/team/${hash}`;

    return <Observable<any>> this.http.get(apiQuery, httpOptions);

  }

  teamPay(teamId: string) {
    const apiQuery = `${serverPort}/team/pay/${teamId}`;

    return <Observable<any>> this.http.get(apiQuery, httpOptions);

  }

}
