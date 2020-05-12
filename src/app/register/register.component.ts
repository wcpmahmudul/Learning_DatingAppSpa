import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor() { }

  ngOnInit(): void {
  }

  register() {
    console.log('Registered');
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
