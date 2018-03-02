import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CallDataService {

constructor(private http: Http) { }
 bookName;
 myItems = [];

 getLibray(url: string) {
     this.getBooks(url).subscribe(
        data => this.bookName = data.items,
        error => console.error('Error: ' + error)
   );
     return this.parseLibrary(this.bookName)
  }

  getBooks(url: string) {
      return this.http.get(url).map(response => {
      return response.json()
    });
  }

  parseLibrary(books: any) {
      this.myItems = [];
      for ( let i = 0; i <= books.length; i++) {
         this.myItems.push({title: books[i].volumeInfo.title, subTitle: books[i].volumeInfo.subtitle, thumbnail: books[i].volumeInfo.imageLinks, description: books[i].volumeInfo.description});
         if (i === books.length - 1) {
            return this.myItems
         }
      }
  }

}
