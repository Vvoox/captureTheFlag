import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DiscoverChallengeComponent} from './discover-challenge/discover-challenge.component';
import {NewChallengeComponent} from './new-challenge/new-challenge.component';
import {MyChallengesComponent} from './my-challenges/my-challenges.component';
import {ModifyChellengeComponent} from './modify-chellenge/modify-chellenge.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : 'new-challenge',
    component : NewChallengeComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch:'full'

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path : 'discover/:nameChall',
    component: DiscoverChallengeComponent

  },
  {
    path : 'my-challenges',
    component : MyChallengesComponent

  },
  {
    path : 'modify-challenge/:nameChall',
    component : ModifyChellengeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
