import { Component, OnInit } from '@angular/core';
import {CTFServicesService} from '../services/ctfservices.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-challenges',
  templateUrl: './my-challenges.component.html',
  styleUrls: ['./my-challenges.component.css']
})
export class MyChallengesComponent implements OnInit {

  public size:number=8;
  public challengeV2 :any;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  public keyword:string='';
  public mode:number=1;
  public alert:number =0;
  public test:string;
  challenges:any;


  constructor(private ctfServicesService:CTFServicesService,  private router : Router ) { }

  ngOnInit(): void {

    this.onGetChallenges();

  }

  onGetChallenges() {
    this.alert=0;

    this.ctfServicesService.getChallenges(this.currentPage,this.size).subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        console.log(this.pages);
        this.challenges=data;
      }
      ,error => {
        console.log(error);
      }
    )

  }

  onGetChallengeV2(){

    this.ctfServicesService.getChallengesV2().subscribe(data=>{
      this.challengeV2=data;
      console.log(data[0]);
    },error => {
      console.log(error);
    })
  }
  onGetPageChallenge(i: number) {
    this.alert=0;
    this.currentPage=i;
    this.keyword='';
    this.onSearchChallenge();
  }

  onSearch(value:any){
    this.alert=0;
    this.currentPage=0;
    this.keyword=value.challenge;
    console.log(value);
    this.onSearchChallenge();
  }

  onSearchChallenge() {
    this.alert=0;
    this.ctfServicesService.getChallengeByKeyWord(this.keyword,this.currentPage,this.size).subscribe(data=>{
        this.totalPages=data["page"].totalPages;
        this.pages=new Array<number>(this.totalPages);
        this.challenges=data;
        console.log(data);
      }
      ,error => {
        console.log(error);
      }
    )
  }
  onViewChallenge(chall) {
    console.log(chall.nameChall);
    this.router.navigateByUrl("/discover/"+chall.nameChall);
  }

  onDeleteChallenge(chall: any) {
    console.log(chall._links.self.href);
    let conf = confirm("Are you sure ? you want to delete "+chall.nameChall);
    if(conf) {
      let url = chall._links.self.href;
      this.ctfServicesService.deleteChallenge(url).subscribe(data =>{
        console.log("you delete the "+chall.nameChall+" challenge");
        this.onSearchChallenge();
      },error => {
        console.log(error);
      })
    }
  }

  onModifyChallenge(chall: any) {
    this.router.navigateByUrl('/modify-challenge/'+chall.nameChall);
  }
}
