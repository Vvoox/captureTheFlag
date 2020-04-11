import { Component, OnInit } from '@angular/core';
import {Challenge} from '../Model/Challenge';
import {CTFServicesService} from '../services/ctfservices.service';

@Component({
  selector: 'app-new-challenge',
  templateUrl: './new-challenge.component.html',
  styleUrls: ['./new-challenge.component.css']
})
export class NewChallengeComponent implements OnInit {

  public challenge:Challenge;

  constructor(private ctfServicesService:CTFServicesService) { }

  ngOnInit(): void {
  }

  addChallenge(value: any) {

    this.challenge=value;
    this.challenge.dateChall=new Date();
    console.log(this.challenge.dateChall);
    this.ctfServicesService.addChallenge(this.challenge).subscribe(data=>{
      console.log(data);
    },error => {

      console.log(error);
    })

  }
}
