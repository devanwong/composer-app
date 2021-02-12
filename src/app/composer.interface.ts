/*
============================================
; Title: Exercise 3.2 - Enhance Composer App
; Author: Devan Wong
; Date: 15 January 2021
; Description: This is the composer.interface.ts page
;===========================================
*/
//This is a typescript file.
// Composers will be created in the constructor in the composer.class file.
export interface IComposer {
  composerId: number;
  fullName: string;
  genre: string;
}
