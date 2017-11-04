import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } 
from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'


@Injectable()
export class MailService {

  constructor(private http: Http) { }

    addToMailingList(email: string) : Promise<Object> {
    let timeStamp  = +new Date();
    let uniqueUrl = 'addToMailingList/' + email + '?tsp=' + timeStamp;
    return this.http
        .post(uniqueUrl, null, null)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }


    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
