import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-fils-user',
  templateUrl: './fils-user.component.html',
  styleUrls: ['./fils-user.component.css']
})
export class FilsUserComponent {
  @Input()RFP!:number;
  @Input()user!:User;
@Output() sender=new EventEmitter<number>();

send(id:number){
this.sender.emit(id);
}

showCurrentUser(){
  alert(this.user.firstName)
}
}
