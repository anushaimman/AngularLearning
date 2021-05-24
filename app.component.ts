import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { count } from 'console';
import {CounterService} from './counter.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
   
})
export class AppComponent  {
  title = 'testproject';
  public sussess = "text-success";
  public fullName: string = "Hello JavaTpoint";   
   
  

//valuu= "";

// myclick()
// {
//   console.log("clicked here");
//  // this.valuu= "Clicked here";
// }

 constructor(private counterService: CounterService) {}
 
  
  public str:any= 0;
public disabl: any =true;
 

 
public setincrementCount(){
  debugger;
  this.str= this.counterService.count += 1;
  this.disabl= false;
}

public getdecrementCOunt() {
  debugger;
  return this.counterService.count
}
public setdecrementCount(){
  debugger;
  if(this.counterService.count > 0)
  {
debugger;
this.str= this.counterService.count -= 1;

}
if(this.counterService.count > 0){
  this.disabl= false;
}
else{
  this.disabl= true;
}
}



}