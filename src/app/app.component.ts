import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-app-v2';
  num1:number;
  result:string;
  check_Number():void{
    //alert("function called.")
    // this.num1=document.getElementById("txtNumber").value;
    // console.log("num1: " +this.num1);
    if(this.num1 > 0){
      this.result = "Number " + this.num1 + " is positive";
    }else{
      this.result = "Number " + this.num1 + " is negative";
    }
  
  }
}
