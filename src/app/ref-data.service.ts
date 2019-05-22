import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class RefDataService {

  constructor(private firestore: AngularFirestore) { }

  getColors() {
    return this.firestore.collection('refData').doc('colors').get();
  }
}
