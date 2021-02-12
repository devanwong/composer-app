/*
============================================
; Title: Exercise 4.4 - Async Pipe
; Author: Devan Wong
; Date: 23 January 2021
; Description: This is the composer.service.ts page
;===========================================
*/

// This was prepopulated from ng g s composer
import { Injectable } from '@angular/core';
// Importing from the IComposer interface
import { IComposer } from './composer.interface';
// Importing from the rxjs interface
import { Observable } from 'rxjs';
import { of } from 'rxjs';
// importing for rxjs map operator
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ComposerService {

   // This is a new field with an array of the imported IComposer
   composers: Array<IComposer>;
   constructor(){
     // These are five new Composer Objects this connects with the class from Icompose file
     this.composers = [
      {composerId:100, fullName: "Frank Ocean", genre: "R&B"},
      {composerId:101, fullName: "Taylor Swift", genre: "Pop"},
      {composerId:102, fullName: "Adele", genre: "Pop"},
      {composerId:103, fullName: "Sam Cooke", genre: "Soul"},
      {composerId:104, fullName: "Billie Eiliosh", genre: "Electropop"}
     ]
   }
   // This functions will act as data access points for the composer objects.
   getComposers(): Observable<IComposer[]> {
    //  of is getting pulled from the import rxjs
    return of(this.composers);
   }
   // This function is what we are going to search for and return back from our list of composers
   getComposer(composerId: number) {
     // This will loop over the composers list to find a matching composer based on the ID that is passed in.
     for (let composer of this.composers) {
       //if the composerID equals the passed ID then return the composer
       if (composer.composerId === composerId) {
        return composer;
       }
     }
   }
  //This function is loading the data reactively to the search control
  filterComposers(name: string): Observable<IComposer[]> {
    // pipe is an operator that is built it
    // the map function is used to return new array of objects
    // the filter function filter the array of data
    // give me a new Observable array (map()) where the name parameter has characters in the composer.fullName (hince the indexOf) call.
    return of(this.composers).pipe(
      map(composers =>
        composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
