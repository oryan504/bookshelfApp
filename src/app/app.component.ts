import { Component, OnInit, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import { CallDataService } from './call-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CallDataService]
})
export class AppComponent {
  title = 'app';
  url = 'https://www.googleapis.com/books/v1/volumes?q=';
  tests = [];
  myBooks = [];
  myList = [];

constructor(private http: Http, private callDataService: CallDataService) {}

mySearch(myType: string) {
  let newSearch = this.url + myType;
  this.myBooks = this.callDataService.getLibray(newSearch);
}

addNewItem = (bookTitle: string) => {
  this.myList.push(bookTitle);
  console.log(this.myList)
}

removeItem = (myPlace) => {
  this.myList.splice(myPlace, 1);
}


ngOnInit() {
 }

}
