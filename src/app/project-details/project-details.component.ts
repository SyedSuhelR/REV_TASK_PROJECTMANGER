import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {

  userForm: FormGroup;
  listdata:any;


  constructor(private fb:FormBuilder){
    this.listdata=[];

    this.userForm=this.fb.group({
      name:['',Validators.required],
      adress:['',Validators.required],
      Phone:['',Validators.required],
      EMAIL:['',Validators.required],
      pin:['',Validators.required]
    })
  }

  public addItems():void
{
this.listdata.push(this.userForm.value);
this.userForm.reset();
}

public reset():void{
  this.userForm.reset();
}

public remove(element:any) {

this.listdata.forEach((value:any,index:any)=> {
  if(value==element){
     this.listdata.splice(index,1);
  }
});
}

}
