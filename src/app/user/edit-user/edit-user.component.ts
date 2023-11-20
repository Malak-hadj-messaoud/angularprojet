import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id!: number;
  user!: User;
  defaultValue = "customer";
  updateForm = this.FormB.group({
    id: [0],
    firstName: [''],
    lastName: [''],
    birthDate: [''],
    email: [''],
    password: [''],
    profession: [''],
    accountCategory: [''],
    picture: [''],
    skills: this.FormB.array(
      [new FormControl('', Validators.minLength(3)), new FormControl('', Validators.minLength(3))]
    )
  })
  constructor(private actR: ActivatedRoute, private R: Router, private userService: UserService, private FormB: FormBuilder) {
    // Initialize the FormGroup here, but don't populate it with user data yet
    /* this.updateForm = new FormGroup({
       id: new FormControl(),
       fn: new FormControl(),
       ln: new FormControl(),
       bd: new FormControl(),
       em: new FormControl(),
       pw: new FormControl(),
       pf: new FormControl(),
       cc: new FormControl(),
       pc: new FormControl(),
       skills:new FormArray([new FormControl("",Validators.minLength(3)),new FormControl("",Validators.minLength(3))])
     });*/
  }
  get skills() {
    return (this.updateForm.get('skills') as FormArray);
  }
  addSkill() {
    this.skills.push(new FormControl('', Validators.minLength(3)))
  }

  ngOnInit() {
    this.id = Number(this.actR.snapshot.paramMap.get('id'));
    this.userService.getUserById(this.id).subscribe(data => {
      this.user = data;
      this.updateForm.setValue(this.user);
    });
  }

  update() {
    this.userService.updateUser(this.user).subscribe(
      () => this.R.navigate(['/users'])
    );
  }
}