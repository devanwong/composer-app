/**
 * Title: app-routing.module.ts
 * Author: Devan Wong
 * Date: 15 January 2020
 * Description: Routing Module page
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Importing the Components to set up the corresponding routes
import { ComposerListComponent } from './composer-list/composer-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerDetailsComponent } from './composer-details/composer-details.component';

    // pathMatch: 'full' means, that the whole URL path needs to match and is consumed by the route matching algorithm.
    // :composerId is a placeholder for the value we pass in the route
const routes: Routes = [
  {
    path: '',
    redirectTo: '/composer-list',
    pathMatch: 'full'
  },
  {
    path: 'composer-list',
    component: ComposerListComponent
  },
  {
    path: 'composer-details/:composerId',
    component: ComposerDetailsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

//This was auto generated with downloading angular routes.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
