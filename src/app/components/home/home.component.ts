import { NgClass, NgStyle } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
[x: string]: any;
  constructor() {
    
  }
  input!:string;
  userName:string = 'ali';
  userAge:number = 20;
  x:null= null;
  y:undefined = undefined;
  isAdmin:boolean = true;
  friends!:string[];
  // tuple => 
  arrMix: [string, number] = ['', 2,];
  // union
  demo:string | number | boolean | object | null =  null ;
  color !:string;
  selectedColor!:string;
  print(x:Event){
    console.log(x.target);
  }

changeStyle(){
  this.isAdmin = false;
}
btn1(){
    this.color = 'red';
    console.log(this.color);

  }
btn2(){
    this.color = 'yellow';
    console.log(this.color);
}

resColorFun(x:string){
  this.selectedColor = x;
  console.log('x', this.selectedColor);
  
}
  
}
