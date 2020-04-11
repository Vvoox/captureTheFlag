import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Challenge} from '../Model/Challenge';

@Injectable({
  providedIn: 'root'
})
export class CTFServicesService {

  public challenge:Object;

  public host:string ="http://localhost:8080";

  constructor(private httpClient:HttpClient) { }


  public getChallenges(page:number,size:number){

    return this.httpClient.get(this.host+"/challenges?page="+page+"&size="+size);

  }
  public getChallengesV2(){
    return this.httpClient.get(this.host+"/challenge/listChallenges");
  }

  public getChallengeByKeyWord(key:string,page:number,size:number){

    return this.httpClient.get(this.host+"/challenges/search/byChallengePage?key="+key+"&page="+page+"&size="+size);
  }

  public getChall(){
    let page:number = 0;
    let size:number = 4;
    return this.httpClient.get("http://localhost:8080/challenges?page="+page+"&size="+size);
  }

  public getChallByName(key:string){
    // @ts-ignore
    return this.httpClient.get(this.host+"/challenges/?key="+key);
  }
  public getChallByNameV2(key:string){
    // @ts-ignore
    return this.httpClient.get(this.host+"/challenges/search/byChallengeName?key="+key);
  }

  public addChallenge(challenge:Challenge){

    return this.httpClient.post(this.host+"/challenges/",challenge);

  }

  //Delete Chellenge by it id link from JSON OUTPUT
  public deleteChallenge(url){

    return this.httpClient.delete(url);
  }


  public updateChallenge(url,data){

    return this.httpClient.put(url,data);
  }
}
