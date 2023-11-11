import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <img src="./assets/files/5c39cf62-f813-4fd4-89c0-95dc3e78a35a.png" alt="">
  Tek Dosya
  <input type="file" (change)="getFile1($event)">
<hr>
Birden Fazla Dosya
  <input type="file" (change)="getFile2($event)" multiple>
  <hr>
  Property ve Tek Dosya
  <input type="file" (change)="getFile3($event)">
  <hr>
  Property ve Birden Fazla Dosya
  <input type="file" (change)="getFile4($event)" multiple>
  
  `
})
export class AppComponent {
  file: any;
  files: any[] = [];

  constructor(
    private http :HttpClient
  ){}

  getFile1(event: any){    
    this.file = event.target.files[0]
    
    this.save1();
  }

  getFile2(event: any){
    this.files = event.target.files;
    
    this.save2();
  }

  getFile3(event: any){    
    this.file = event.target.files[0]
    
    this.save3();
  }

  getFile4(event: any){
    this.files = event.target.files;
    
    this.save4();
  }


  save1(){
    const formData = new FormData();
    formData.append("file", this.file, this.file.name);

    this.http.post("https://localhost:7017/api/Home/SaveFile",formData)
    .subscribe(res=> {

    })
  }

  save2(){
    const formData = new FormData();

    for(let file of this.files){
      formData.append("files", file, file.name);
    }   

    this.http.post("https://localhost:7017/api/Home/SaveFiles",formData)
    .subscribe(res=> {

    })
  }

  save3(){
    const formData = new FormData();
    formData.append("id", "1");
    formData.append("file", this.file, this.file.name); 

    this.http.post("https://localhost:7017/api/Home/SaveWithFile",formData)
    .subscribe(res=> {

    })
  }

  save4(){
    const formData = new FormData();
    formData.append("id", "1");
    for(let file of this.files){
      formData.append("files", file, file.name);
    }   

    this.http.post("https://localhost:7017/api/Home/SaveWithFileS",formData)
    .subscribe(res=> {

    })
  }
}
