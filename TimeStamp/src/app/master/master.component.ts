import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})

export class MasterComponent implements OnInit 
{

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {}

}
