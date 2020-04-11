import { Component, OnInit } from '@angular/core';
import {Challenge} from '../Model/Challenge';
import {ActivatedRoute} from '@angular/router';
import {CTFServicesService} from '../services/ctfservices.service';

@Component({
  selector: 'app-modify-chellenge',
  templateUrl: './modify-chellenge.component.html',
  styleUrls: ['./modify-chellenge.component.css']
})
export class ModifyChellengeComponent implements OnInit {

  public key:string
  public challenge:Challenge
  public url:string="http://localhost:8080/challenge/" ;

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

  onUploadChallenge(value: Challenge) {
    this.challenge.dateChall=new Date();
    this.challenge=value;
    this.ctfServicesService.updateChallenge(this.url,this.challenge).subscribe(data=>{
      console.log(data);
    },error=>{
      console.log(error);
    })

  }
}
