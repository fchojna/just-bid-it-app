import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() type: string = 'full';

  constructor() { }

  ngOnInit(): void {
  }

}
