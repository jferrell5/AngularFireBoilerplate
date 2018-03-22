import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularFire/Firebase Boilerplate App';
  items: Observable<any[]>;
  private itemDoc: AngularFirestoreDocument<any>;
  private itemsCollection: AngularFirestoreCollection<any>;

  constructor(afs: AngularFirestore) {
    this.items = afs.collection('items').valueChanges();
  }

  //Update
  update(item: any) {
    this.itemDoc.update(item);
  }

  //Create
  addItem(item: any) {
    const id = this.afs.createId();
    this.itemsCollection.add(item);
  }
}
