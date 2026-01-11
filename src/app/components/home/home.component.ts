import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
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
  
  print(x:Event){
    console.log(x.target);
  }

  
}
