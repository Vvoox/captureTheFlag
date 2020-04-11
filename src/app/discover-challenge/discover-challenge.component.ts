import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CTFServicesService} from '../services/ctfservices.service';
import {Challenge} from '../Model/Challenge';

@Component({
  selector: 'app-discover-challenge',
  templateUrl: './discover-challenge.component.html',
  styleUrls: ['./discover-challenge.component.css']
})
export class DiscoverChallengeComponent implements OnInit {

  public key:string
  public challenge:Challenge
  constructor(private activatedRoute:ActivatedRoute , private ctfServicesService:CTFServicesService) { }

  ngOnInit(): void {
    this.key =this.activatedRoute.snapshot.params.nameChall;
    console.log(this.key);

    this.getChallenge(this.key);
  }
  public getChallenge(key:any){
    this.ctfServicesService.getChallByNameV2(key).subscribe(data=>{
      // @ts-ignore
      this.challenge=data;
      console.log(this.challenge);

    },error => {
      console.log(error);
    })

}



}
